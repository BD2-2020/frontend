import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';

import Topbar from "./Topbar";
import { MainPageStyle } from "./common/styles"

const logo = require("../images/logo.svg");

class Main extends Component {

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <Grid container justify="center">
          <Grid item xs={12}>
                <div className={classes.logo}>
                  <img width={100} height={100} src={logo} alt="" />
                </div>
          </Grid>
          <Grid item xs={12}>
                <div className={classes.stepContainer}>
                  <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                      <Typography component="h1" variant="h5" align="center">
                        Witamy w Verva Racing
                      </Typography>
                    </div>
                  </Container>
                </div>
          </Grid>
            </Grid>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(MainPageStyle)(Main));
