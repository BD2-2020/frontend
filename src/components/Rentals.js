import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import CardItem from "./cards/CardItem";
import Topbar from "./Topbar";
import SectionHeader from "./typo/SectionHeader";
import Button from "@material-ui/core/Button";

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
              <Grid item xs={10}>
                <CardItem name="Fiat Punto" comfort="3/5" />
              </Grid>
              <Grid item xs={2}>
                  <Button> Umów zwrot </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Rentals);
