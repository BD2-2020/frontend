import 'date-fns'
import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import CardItem from "./cards/CardItem";
import FormControl from "@material-ui/core/FormControl";
import AutoComplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Topbar from "./Topbar";
import UserSession from "./auth/UserSession"

const numeral = require("numeral");
numeral.defaultFormat("0,000");

const backgroundShape = require("../images/shape.svg");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    margin: `0 ${theme.spacing(2)}px`,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  loadingState: {
    opacity: 0.05
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2)
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152,
    height: 36
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  block: {
    padding: theme.spacing(2)
  },
  loanAvatar: {
    display: "inline-block",
    verticalAlign: "center",
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  },
  interestAvatar: {
    display: "inline-block",
    verticalAlign: "center",
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light
  },
  inlining: {
    display: "inline-block",
    marginRight: 10
  },
  buttonBar: {
    display: "flex"
  },
  noBorder: {
    borderBottomStyle: "hidden"
  },
  mainBadge: {
    textAlign: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  formControl: {
    width: "100%"
  },
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

//const monthRange = Months;

class Reservation extends Component {
  state = {
    classes: [],
    cars: {
      '': [],
    },
    class: {
      ID: '',
    },
    startDate: new Date(),
    endDate: new Date(),
    age: 18
  };

  componentDidMount() {
    getClasses().then((res) => {
      let newCars = {
        '': [],
      }
      for (const carClass of res) {
        newCars[carClass.ID] = [];
      }
      this.setState({
        classes: res,
        cars: newCars
      });
    });
  }

  getEstimate() {   
    if (this.state.class.ID !== '') {
      const diffTime = Math.abs(this.state.endDate - this.state.startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const classPrice = parseInt(this.state.class.PRICE.substr(1));
      const ageMultiplier = Math.abs(50 - this.state.age) / 32 + 1;

      return Math.ceil(diffDays * classPrice * ageMultiplier);
    }
    return 0;
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
              <Grid item xs={12}>
                <div className={classes.topBar}>
                  <div className={classes.block}>
                    <Typography variant="h6" gutterBottom>
                      Rezerwacja pojazdu
                    </Typography>
                    <Typography variant="body1">
                      Wybierz pojazd dla siebie z naszej bogatej kolekcji
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Klasa samochodu
                </Typography>
                <Paper className={classes.paper}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <AutoComplete
                        id="class"
                        options={this.state.classes}
                        classes={{
                          option: classes.option,
                        }}
                        autoHighlight
                        getOptionLabel={(option) => option.CLASS}
                        renderOption={(option => (
                          <React.Fragment>
                            {option.CLASS}
                          </React.Fragment>
                        ))}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Wybierz klasę"
                            variant="outlined"
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password',
                            }}
                          />
                        )}
                        onChange={(event, value) => this.setState({class: value})}
                      />
                    </FormControl>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                      Dostępne pojazdy w wybranej kategorii
                </Typography>
                {this.state.cars[this.state.class.ID].map((value) => {
                  return <CardItem name={value.CAR_BRAND_ID + ' ' + value.CAR_MODEL_ID} comfort="5/5" />
                })}
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div>
                    <Typography variant="subtitle1" gutterBottom>
                      Okres wypożyczenia
                    </Typography>
                    <div className={classes.blockCenter}>
                      <Typography variant="body1">Od kiedy</Typography>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="yyyy/MM/dd"
                        margin="normal"
                        id="date-picker-start"
                        label="Wybierz datę rozpoczęcia"
                        value={this.state.startDate}
                        onChange={(date) => {
                          getAvailableCars(this.state.classes, date, this.state.endDate).then((res) => this.setState({cars: res}));
                          this.setState({startDate: date})
                        }}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        maxDate={this.state.endDate}
                      />
                      <Typography variant="body1">Do kiedy</Typography>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="yyyy/MM/dd"
                        margin="normal"
                        id="date-picker-end"
                        label="Wybierz datę zakończenia"
                        value={this.state.endDate}
                        onChange={(date) => {
                          getAvailableCars(this.state.classes, this.state.startDate, date).then((res) => this.setState({cars: res}));
                          this.setState({endDate: date});
                        }}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        minDate={this.state.startDate}
                      />
                      </MuiPickersUtilsProvider>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div>
                    <Typography variant="subtitle1" gutterBottom>
                      Wiek kierowcy
                    </Typography>
                    <Typography variant="body1">
                      Wybierz swój wiek
                    </Typography>
                    <div className={classes.blockCenter}>
                      <Typography color="secondary" variant="h6" gutterBottom>
                        {this.state.age} lat
                      </Typography>
                    </div>
                    <div>
                      <Slider
                        value={this.state.age}
                        min={18}
                        max={70}
                        step={1}
                        onChange={(event, value) => this.setState({age: value})}
                      />
                    </div>
                    <div className={classes.rangeLabel}>
                      <div>
                        <Typography variant="subtitle2">18 lat</Typography>
                      </div>
                      <div>
                        <Typography variant="subtitle2">&gt;= 70 lat</Typography>
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                  <Paper
                    className={classes.paper}
                    style={{ position: "relative" }}
                  >
                    <div>
                      <Typography variant="subtitle1" gutterBottom>
                        Szacowana kwota
                      </Typography>
                      <div className={classes.mainBadge}>
                        <Typography
                          variant="h5"
                          color={"secondary"}
                          gutterBottom
                        >
                          {this.getEstimate()} PLN
                        </Typography>
                      </div>
                      <div className={classes.buttonBar}>
                        <Button
                          component={Link}
                          color="primary"
                          variant="contained"
                          className={classes.actionButtom}
                          disabled={this.state.cars[this.state.class.ID].length === 0}
                          onClick={(event) => {
                            reserve({
                              startDate: this.formatDate(this.state.startDate),
                              endDate: this.formatDate(this.state.endDate),
                              price: this.getEstimate(),
                              customerID: UserSession.getEmail(),
                              carID: this.state.cars[this.state.class.ID][0].ID
                            }).then((res) => alert(res));
                          }}
                        >
                          Zarezerwuj
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

function formatDate(date) {
  return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
}

async function getClasses() {
  const response = await fetch('/api/classes');
  const body = await response.json();
  return body.message;
}

async function getAvailableCars(classes, from, to) {
  const response = await fetch('/api/available_cars/' + formatDate(from) + '/' + formatDate(to));
  const body = await response.json();

  let cars = {
    '': [],
  };
  for (const carClass of classes) {
    cars[carClass.ID] = [];
  }

  let uniqueModelNames = new Set();
  for (const car of body.message) {
    if (!uniqueModelNames.has(car.CAR_MODEL_ID)) {
      cars[car.CAR_CLASS_ID].push(car);
      uniqueModelNames.add(car.CAR_MODEL_ID);
    }
  }

  return cars;
}

async function reserve(reservation) {
  const response = await fetch('/api/add_reservation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservation),
  });
  const message = await response.json();
  return message.message;
}

export default withRouter(withStyles(styles)(Reservation));
