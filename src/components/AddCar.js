import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Back from "./common/Back";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import AutoComplete from '@material-ui/lab/Autocomplete'

const backgroundShape = require("../images/shape.svg");

const logo = require("../images/logo.svg");

const numeral = require("numeral");
numeral.defaultFormat("0");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary["A100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 1000px",
    marginTop: 10,
    padding: 20,
    paddingBottom: 500
  },
  grid: {
    margin: `0 ${theme.spacing(2)}px`
  },
  smallContainer: {
    width: "60%"
  },
  bigContainer: {
    width: "80%"
  },
  logo: {
    marginBottom: 24,
    display: "flex",
    justifyContent: "center"
  },
  stepContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stepGrid: {
    width: "80%"
  },
  buttonBar: {
    marginTop: 32,
    display: "flex",
    justifyContent: "center"
  },
  button: {
    backgroundColor: theme.palette.primary["A100"]
  },
  backButton: {
    marginRight: theme.spacing(1) 
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  stepper: {
    backgroundColor: "transparent"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  topInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 42
  },
  formControl: {
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(3)
  },
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

class AddCar extends Component {
  state = {
    brands: [],
    models: {'': []},
    selectedBrand: '',
    model: '',
    year: '',
    VIN: '',
    numberPlate: '',
  };

  componentDidMount() {
    getBrands().then((res) => {
      this.setState({ 
        brands: res.sort(),
        models: getAllModels(res), 
      });
    });
  }
  
  render() {
    const { classes } = this.props;
    
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Back />
          <Grid container justify="center">
            <Grid
              spacing={10}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
              >
              <Grid item xs={12}>
                <div className={classes.logo}>
                  <img width={100} height={100} src={logo} alt="" />
                </div>
                <div className={classes.stepContainer}>
                  <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                      <Typography component="h1" variant="h5">
                        Dodaj samochód
                      </Typography>
                      <form className={classes.form} noValidate>
                        <Grid>
                            <FormControl className={classes.formControl}>
                                <AutoComplete
                                  id="brand"
                                  options={this.state.brands}
                                  classes={{
                                    option: classes.option,
                                  }}
                                  autoHighlight
                                  getOptionLabel={(option) => option}
                                  renderOption={(option => (
                                    <React.Fragment>
                                      {option}
                                    </React.Fragment>
                                  ))}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="Wybierz markę"
                                      variant="outlined"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password',
                                      }}
                                    />
                                  )}
                                  onChange={(event, value) => this.setState({selectedBrand: value})}
                                />
                            </FormControl>
                            <FormControl className={classes.formControl}>
                            <AutoComplete
                              id="model"
                              options={this.state.models[this.state.selectedBrand]}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="Wybierz model"
                                  variant="outlined"
                                  inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password',
                                  }}
                                />
                              )}
                              onChange={(event, value) => this.setState({model: value})}
                            />
                            </FormControl>
                        </Grid>
                        <FormControl classes={classes.formControl} fullWidth variant="outlined" margin="normal">
                          <TextField
                            variant="outlined"
                            margin="normal"
                            label="VIN"
                            name="VIN"
                            onChange={(event) => this.setState({ VIN: event.target.value})}
                            />
                          <TextField
                            variant="outlined"
                            margin="normal"
                            label="Rocznik"
                            name="production_year"
                            onChange={(event) => this.setState({ year: event.target.value})}
                            />
                          <TextField
                            variant="outlined"
                            margin="normal"
                            label="Nr rejestracji"
                            name="number_plate"
                            onChange={(event) => this.setState({ numberPlate: event.target.value})}
                            />
                        </FormControl>
                        <Button
                          type="button"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                          onClick={(event) => submit({
                            model: this.state.model,
                            VIN: this.state.VIN,
                            year: this.state.year,
                            numberPlate: this.state.numberPlate,
                          }).then((res) => alert(res))}
                          >
                          Dodaj
                        </Button>
                      </form>
                    </div>
                  </Container>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

async function getBrands() {
  const response = await fetch('/api/brands');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);

  return body.message;
};

async function getModels(brand) {
  const response = await fetch('/api/models/' + brand);
  const body = await response.json();
  const message = body.message;
  if (response.status !== 200) throw Error(message);
  return message;
}

function getAllModels(brands) {
  var ans = {'': []};
  for (const brand of brands) {
    getModels(brand).then((res) => ans[brand] = res.sort());
  }

  return ans;
};

async function submit(car) {
  if (car.model === '' || car.VIN === '' || car.year === '' || car.numberPlate === '') {
      return 'Missing info';
  }
  var date = new Date(car.year, 1, 1);
  car.year = date.getFullYear() + '-01-01';

  const response = await fetch('/api/add_car', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });
  const text = await response.json();
  return text.message;
}

export default withRouter(withStyles(styles)(AddCar));
