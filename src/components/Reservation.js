import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
//import Months from "./common/Months";
import MenuItem from "@material-ui/core/MenuItem";
import CardItem from "./cards/CardItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Topbar from "./Topbar";

const numeral = require("numeral");
numeral.defaultFormat("0,000");

const backgroundShape = require("../images/shape.svg");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    margin: `0 ${theme.spacing(2)}px`,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  loadingState: {
    opacity: 0.05
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2)
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152,
    height: 36
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  block: {
    padding: theme.spacing(2)
  },
  loanAvatar: {
    display: "inline-block",
    verticalAlign: "center",
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  },
  interestAvatar: {
    display: "inline-block",
    verticalAlign: "center",
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light
  },
  inlining: {
    display: "inline-block",
    marginRight: 10
  },
  buttonBar: {
    display: "flex"
  },
  noBorder: {
    borderBottomStyle: "hidden"
  },
  mainBadge: {
    textAlign: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  formControl: {
    width: "100%"
  }
});

//const monthRange = Months;

class Reservation extends Component {
  state = {
  };

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
              <Grid item xs={12}>
                <div className={classes.topBar}>
                  <div className={classes.block}>
                    <Typography variant="h6" gutterBottom>
                      Rezerwacja pojazdu
                    </Typography>
                    <Typography variant="body1">
                      Wybierz pojazd dla siebie z naszej bogatej kolekcji
                    </Typography>
                  </div>
                  <div>
                    <Button
                      variant="outlined"
                      className={classes.outlinedButtom}
                    >
                      Pomoc
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Klasa samochodu
                </Typography>
                <Paper className={classes.paper}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <Select
                        value={"combi"}>
                        <MenuItem value={"combi"}>Combi</MenuItem>
                        <MenuItem value={"sedan"}>Sedan</MenuItem>
                      </Select>
                    </FormControl>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                      Dostępne pojazdy w wybranej kategorii
                </Typography>
                <CardItem name="Fiat Punto" comfort="3/5" />
                <CardItem name="Skoda Fabia" comfort="3.5/5" />
                <CardItem name="Renault Megan" comfort="3.5/5" />
                <CardItem name="Volswagen Golf" comfort="4/5" />
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div>
                    <Typography variant="subtitle1" gutterBottom>
                      Okresu wypożyczenia
                    </Typography>
                    <Typography variant="body1">Od kiedy</Typography>
                    <div className={classes.blockCenter}>
                      <Typography color="secondary" variant="h6" gutterBottom>
                        24.12.2020 18.00
                      </Typography>
                    </div>
                    <Typography variant="body1">Do kiedy</Typography>
                    <div className={classes.blockCenter}>
                      <Typography color="secondary" variant="h6" gutterBottom>
                        31.12.2020 18.00
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div>
                    <Typography variant="subtitle1" gutterBottom>
                      Wiek kierowcy
                    </Typography>
                    <Typography variant="body1">
                      Wybierz swój wiek
                    </Typography>
                    <div className={classes.blockCenter}>
                      <Typography color="secondary" variant="h6" gutterBottom>
                        18 lat
                      </Typography>
                    </div>
                    <div>
                      <Slider
                        value={18}
                        min={18}
                        max={70}
                        step={1}
                      />
                    </div>
                    <div className={classes.rangeLabel}>
                      <div>
                        <Typography variant="subtitle2">18 lat</Typography>
                      </div>
                      <div>
                        <Typography variant="subtitle2">&gt;= 70 lat</Typography>
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                  <Paper
                    className={classes.paper}
                    style={{ position: "relative" }}
                  >
                    <div>
                      <Typography variant="subtitle1" gutterBottom>
                        Szacowana kwota
                      </Typography>
                      <div className={classes.mainBadge}>
                        <Typography
                          variant="h5"
                          color={"secondary"}
                          gutterBottom
                        >
                          1855 - 3220 PLN
                        </Typography>
                      </div>

                      <Typography variant="subtitle1" gutterBottom>
                        Okres ważności rezerwacji: <b>22.12.2020r.</b>
                      </Typography>
                      <div className={classes.buttonBar}>
                        <Button
                          to={{ pathname: "/dashboard", search: `?type=apply` }}
                          component={Link}
                          color="primary"
                          variant="contained"
                          className={classes.actionButtom}
                        >
                          Zarezerwuj
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Reservation));
