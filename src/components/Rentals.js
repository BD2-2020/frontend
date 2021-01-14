import React, { Component } from "react";
import 'date-fns'
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import ReservationCard from "./cards/ReservationCard";
import Topbar from "./Topbar";
import SectionHeader from "./typo/SectionHeader";
import Button from "@material-ui/core/Button";
import UserSession from './auth/UserSession'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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

class Rentals extends Component {
  state = {
    rentals: [],
    endDates: [],
  }

  componentDidMount() {
    getRentals().then((res) => {
      if (res != null) {
        var dates = [];
        for (const rental of res) {
          dates.push(rental.END_DATE);
        }
        this.setState({
          rentals: res,
          endDates: dates,
        });
      }
    })
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
                  subtitle="Lista aktualnie wypożyczonych pojazdów"
                />
                <Grid container>
                  {this.state.rentals.map((value, index) => {
                    return (
                      <div>
                        <Grid container>
                          <Grid item xs={10}>
                            <ReservationCard
                              name={value.CAR_BRAND_ID + ' ' + value.CAR_MODEL_ID}
                              startDate={value.START_DATE}
                              endDate={value.END_DATE}
                              price={value.PRICE.substr(1) + " PLN"}/>
                          </Grid>
                          <Grid item xs={2}>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              disableToolbar
                              variant="inline"
                              format="yyyy/MM/dd"
                              margin="normal"
                              id="date-picker-start"
                              label="Wybierz datę zwrotu"
                              value={this.state.endDates[index]}
                              onChange={(date) => {
                                var copy = this.state.endDates.splice();
                                copy[index] = date;
                                this.setState({endDates: copy});
                              }
                            }
                              KeyboardButtonProps={{
                                'aria-label': 'change date',
                              }}
                              minDate={new Date(value.START_DATE)}
                              maxDate={new Date(value.END_DATE)}
                            />
                          </MuiPickersUtilsProvider>
                              <Button
                                onClick={(event) => endRental({
                                  endDate: this.state.endDates[index],
                                  ID: value.ID,
                                }).then((res) => alert(res))}
                              > 
                                Umów zwrot 
                              </Button>
                          </Grid>
                        </Grid>
                      </div>
                    );
                  })}
                </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

async function getRentals() {
  const response = await fetch('/api/rentals/' + UserSession.getEmail());
  const text = await response.json();
  return text.message;
}

async function endRental(rental) {
  const response = await fetch('/api/end_rental', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rental)
  });
  const text = await response.json();
  return text.message;
}

export default withStyles(styles)(Rentals);
