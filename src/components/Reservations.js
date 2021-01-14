import React, { Component } from "react";
import 'date-fns'
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import ReservationCard from "./cards/ReservationCard";
import Topbar from "./Topbar";
import SectionHeader from "./typo/SectionHeader";
import Button from "@material-ui/core/Button";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import UserSession from './auth/UserSession'

const backgroundShape = require("../images/shape.svg");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 20,
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    width: 1000
  }
});

class Reservations extends Component {
  state = {
    reservations: [],
    rentalStartDates: [],
  }

  componentDidMount() {
    getReservations().then((res) => {
      if (res == null) {
        alert('Error');
      } else {
        var arr = [];
        for (const reservation of res) {
          arr.push(reservation.START_DATE);
        }
        this.setState({
          reservations: res,
          rentalStartDates: arr,
        });
      }
    });
  }

  formatDate(date) {
    return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
  }

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={3}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
                <SectionHeader
                  title="Rezerwacje"
                  subtitle="Lista wszystkich złożonych rezerwacji"
                />
              {this.state.reservations.map((value, index) => {
                return (
                  <div>
                    <Grid container>
                      <Grid item xs={9}>
                        <ReservationCard 
                          name={value.CAR_BRAND_ID + ' ' + value.CAR_MODEL_ID}
                          startDate={value.START_DATE}
                          endDate={value.END_DATE}
                          price={value.PRICE.substr(1) + " PLN"} 
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Grid container direction='column'>
                          <Button
                            onClick={(event) => cancelReservation(value.ID).then((res) => alert(res))}
                          > 
                            Anuluj 
                          </Button>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              disableToolbar
                              variant="inline"
                              format="yyyy/MM/dd"
                              margin="normal"
                              id="date-picker-start"
                              label="Wybierz datę rozpoczęcia"
                              value={this.state.rentalStartDates[index]}
                              onChange={(date) => {
                                var copy = this.state.rentalStartDates.splice();
                                copy[index] = date;
                                this.setState({rentalStartDates: copy});
                              }}
                              KeyboardButtonProps={{
                                'aria-label': 'change date',
                              }}
                              minDate={value.START_DATE}
                            />
                          </MuiPickersUtilsProvider>
                          <Button
                            onClick={(event) => rent({
                              ID: value.ID,
                              startDate: this.formatDate(this.state.rentalStartDates[index]),
                            }).then((res) => alert(res))}
                          > 
                            Wypożycz 
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

async function getReservations() {
  const response = await fetch('/api/reservations/' + UserSession.getEmail());
  const text = await response.json();
  return text.message;
}

async function cancelReservation(id) {
  const response = await fetch('/api/cancel_reservation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ID: id,
    }),
  });
  const text = await response.json();
  return text.message;
};

async function rent(rental) {
  const response = await fetch('/api/add_rental', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rental)
  });
  const text = await response.json();
  return text.message;
}

export default withStyles(styles)(Reservations);
