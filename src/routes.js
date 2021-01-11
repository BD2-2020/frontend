import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Reservation from './components/Reservation'
import Wizard from './components/Wizard'
import Reservations from './components/Reservations'
import Main from './components/Main'
import Signup from './components/Signup'
import AddEmployee from './components/AddEmployee'
import Rentals from './components/Rentals'
import AddCar from './components/AddCar'
import Cars from './components/Cars'
import ScrollToTop from './components/ScrollTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/new_reservation' component={ Reservation } />
          <Route exact path='/reservations' component={ Reservations } />
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/wizard' component={ Wizard } />
          <Route exact path='/add_employee' component={ AddEmployee } />
          <Route exact path='/rentals' component={ Rentals } />
          <Route exact path='/add_car' component={ AddCar } />
          <Route exact path='/cars' component={ Cars } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )