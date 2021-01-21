import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import {MaterialCardStyle} from "../common/styles"

const punto = require("../../images/punto.jpg")

class Car extends Component {

  render() {
    const { classes, name, VIN, year, plateNumber } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.itemContainer}>
            <div className={classes.avatarContainer}>
                <img src={punto} className={classes.avatar} alt=''></img>
            </div>
            <div className={classes.baseline}>
              <div className={classes.inline} style={{ width: '30%' }}>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Model
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {name}
                </Typography>
              </div>
              <div className={classes.inline} style={{ width: '20%' }}>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Rok produkcji
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {year}
                </Typography>
              </div>
              <div className={classes.inline}>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  VIN
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {VIN}
                </Typography>
              </div>
            </div>
            <div className={classes.inlineRight}>
              <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                Numer rejestracji
              </Typography>
              <Typography variant="h5" gutterBottom>
                {plateNumber}
              </Typography>
            </div>
          </div>
        </Paper>
      </div>
    )
  }
}

export default withStyles(MaterialCardStyle)(Car);
