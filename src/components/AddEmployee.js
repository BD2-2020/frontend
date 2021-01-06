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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

class AddEmployee extends Component {

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
                        Dodaj pracownika
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
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel id="role">Uprawnienia</InputLabel>
                            <Select
                                labelId="role"
                                id="role-select"
                                //onChange={handleChange}
                            >
                                <MenuItem value={"admin"}>Administrator</MenuItem>
                                <MenuItem value={"employee"}>Pracownik</MenuItem>
                            </Select>
                            </FormControl>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Imię"
                          name="first_name"
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Nazwisko"
                          name="last_name"
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="PESEL"
                          name="pesel"
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Pensja"
                          name="salary"
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Numer konta"
                          name="account_no"
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Adres"
                          name="address1"
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Adres (kont.)"
                          name="address2"
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Kod pocztowy"
                          name="postal_code"
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Miasto"
                          name="city"
                        />
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
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

export default withRouter(withStyles(styles)(AddEmployee));
