import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const punto = require("../../images/punto.jpg")

const styles = theme => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  avatar: {
    width: '100%',
    maxWidth: '200px',
    borderRadius: '10%',
    backgroundColor: theme.palette.grey['200'],
    color: theme.palette.text.primary,
  },
  avatarContainer: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginBottom: theme.spacing(4)
    }
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  },
  baseline: {
    width: '100%',
    alignSelf: 'baseline',
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: 0
    }
  },
  inline: {
    display: 'inline-block',
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  inlineRight: {
    width: '30%',
    textAlign: 'right',
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0,
      textAlign: 'center'
    }
  },
  backButton: {
    marginRight: theme.spacing(2)
  }
})

class Car extends Component {

  render() {
    const { classes, name, startDate, endDate, price } = this.props;

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
                  Od
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {startDate}
                </Typography>
              </div>
              <div className={classes.inline}>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Do
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {endDate}
                </Typography>
              </div>
            </div>
            <div className={classes.inlineRight}>
              <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                Cena
              </Typography>
              <Typography variant="h5" gutterBottom>
                {price}
              </Typography>
            </div>
          </div>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Car);
