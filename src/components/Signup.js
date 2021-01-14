import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Back from "./common/Back";
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';

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
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(3)
  }
});

class Wizard extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    PESEL: '',
    licenseNumber: '',
    address1: '',
    address2: '',
    postalCode: '',
    city: '',
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
                      <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                      </Avatar>
                      <Typography component="h1" variant="h5">
                        Zarejestruj się
                      </Typography>
                      <form className={classes.form} noValidate>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Adres email"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          onChange={(event) => this.setState({email: event.target.value})}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Hasło"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          onChange={(event) => this.setState({password: event.target.value})}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Imię"
                          name="first_name"
                          onChange={(event) => this.setState({firstName: event.target.value})}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Nazwisko"
                          name="last_name"
                          onChange={(event) => this.setState({lastName: event.target.value})}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="PESEL"
                          name="pesel"
                          onChange={(event) => this.setState({PESEL: event.target.value})}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Numer prawa jazdy"
                          name="license_no"
                          onChange={(event) => this.setState({licenseNumber: event.target.value})}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Adres"
                          name="address1"
                          onChange={(event) => this.setState({address1: event.target.value})}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Adres (kont.)"
                          name="address2"
                          onChange={(event) => this.setState({address2: event.target.value})}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Kod pocztowy"
                          name="postal_code"
                          onChange={(event) => this.setState({postalCode: event.target.value})}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Miasto"
                          name="city"
                          onChange={(event) => this.setState({city: event.target.value})}
                        />
                        <Button
                          type="button"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                          onClick={(event) => submit(this.state).then((res) => alert(res))}
                        >
                          Zarejestruj się
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

async function submit(customer) {
  if (customer.email === '' || customer.password === '' || customer.firstName === '' || customer.lastName === '' ||
    customer.licenseNumber === '' || customer.address1 === '' || customer.postalCode === '' || customer.city === '')
    return 'Missing info';
  const response = await fetch('/api/add_customer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  });
  const text = await response.json();
  return text.message;
}

export default withRouter(withStyles(styles)(Wizard));
