import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Topbar from "./Topbar";
import SectionHeader from "./typo/SectionHeader";
import Button from "@material-ui/core/Button";
import Car from "./cards/Car";

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

class Cars extends Component {
  state = {
    cars: [],
  }

  componentDidMount() {
    getCars().then((res) => this.setState( {cars: res }));
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
                  title="Samochody"
                  subtitle="Lista wszystkich samochodów"
                />
                  <Grid>
                    {this.state.cars.map((value) => {
                      return (
                        <div>
                          <Grid container spacing={3}>
                            <Grid item xs={10}>
                              <Car 
                                name={value.CAR_BRAND_ID + ' ' + value.CAR_MODEL_ID}
                                VIN={value.ID}
                                year={value.PRODUCTION_YEAR}
                                plateNumber={value.NUMBER_PLATE}
                              />
                            </Grid>
                            <Grid item xs={2}>
                              <Button onClick={(event) => 
                                removeCar(value.ID).then((res) => {
                                  if (res === 'Success') {
                                    const copy = this.state.cars;
                                    const index = copy.indexOf(value);
                                    copy.splice(index, 1);
                                    this.setState( {cars: copy} );
                                  }
                                  alert(res);
                                })
                              }> 
                                Wycofaj 
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

async function getCars() {
  const response = await fetch('/api/cars');
  const json = await response.json();
  const cars = json.message;
  for (const car of cars) {
    car.PRODUCTION_YEAR = new Date(car.PRODUCTION_YEAR).getFullYear();
  } 
  return cars;
}

async function removeCar(VIN) {
  const response = await fetch('/api/remove_car', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({'VIN': VIN}),
  });
  const text = await response.json();
  return text.message;
}

export default withStyles(styles)(Cars);
