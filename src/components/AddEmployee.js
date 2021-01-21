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
import FormControl from '@material-ui/core/FormControl';
import AutoComplete from '@material-ui/lab/Autocomplete';

import { MaterialFormStyle } from "./common/styles";

const logo = require("../images/logo.svg");

const numeral = require("numeral");
numeral.defaultFormat("0");


class AddEmployee extends Component {
  state = {
    roles: [],

    email: '',
    password: '',
    role: '',
    firstName: '',
    lastName: '',
    PESEL: '',
    salary: '',
    accountNumber: '',
    address1: '',
    address2: '',
    postalCode: '',
    city: '',
  }

  componentDidMount() {
    getRoles().then((res) => this.setState({roles: res}));
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
                        <FormControl className={classes.formControl}>
                          <AutoComplete
                            id="roles"
                            options={this.state.roles}
                            classes={{
                              option: classes.option,
                            }}
                            autoHighlight
                            getOptionLabel={(option) => option.name}
                            renderOption={(option => (
                              <React.Fragment>
                                {option.name}
                              </React.Fragment>
                            ))}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="Wybierz rolę"
                                variant="outlined"
                                inputProps={{
                                  ...params.inputProps,
                                  autoComplete: 'new-password',
                                }}
                              />
                            )}
                            onChange={(event, value) => this.setState({role: value})}
                          />
                        </FormControl>
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
                          label="Pensja"
                          name="salary"
                          onChange={(event) => this.setState({salary: event.target.value})}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Numer konta"
                          name="account_no"
                          onChange={(event) => this.setState({accountNumber: event.target.value})}
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
                          onClick={(event) => {
                            const employee = {
                              email: this.state.email,
                              password: this.state.password,
                              role: this.state.role,
                              firstName: this.state.firstName,
                              lastName: this.state.lastName,
                              PESEL: this.state.PESEL,
                              salary: this.state.salary,
                              accountNumber: this.state.accountNumber,
                              address1: this.state.address1,
                              address2: this.state.address2,
                              postalCode: this.state.postalCode,
                              city: this.state.city,
                            };
                            submit(employee).then((res) => {
                              var message = res === 'Success' ? 'Konto założone.' : 'E-mail już zarejestrowany.';
                              if (res === 'Missing info')
                                message = 'Wypełnij wszystkie pola.'
                              alert(message);
                            });
                          }}                                
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

async function getRoles() {
  const response = await fetch('/api/roles');
  const body = await response.json();
  return body.message;
}

async function submit(employee) {
  if (employee.email === '' || employee.password === '' || employee.firstName === '' || employee.lastName === '' ||
    employee.address1 === '' || employee.postalCode === '' || employee.city === '' || employee.salary === '' || employee.accountNumber === '')
    return 'Missing info';
  const response = await fetch('/api/add_employee', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  });
  const text = await response.json();
  return text.message;
}

export default withRouter(withStyles(MaterialFormStyle)(AddEmployee));
