import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';

const logo = require("../../images/logo.svg")

const styles = theme => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  container: {
    maxWidth: 600,
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  stepsContainer: {
    textAlign: 'left',
    marginTop: 0,
  },
})

class BlockElement extends Component {

  render() {
    const { classes, name, comfort } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.paper}>
          <div className={classes.container}>
            <Avatar>
                <img width={200} height={200} src={logo} alt="" />
            </Avatar>
            <div className={classes.stepsContainer}>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Combi
                </Typography>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(BlockElement);
