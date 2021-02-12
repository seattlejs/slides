import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home, MonthlyMeetup, SpecialEvent, CodeKatas, VirtualCoffee, Raffle } from './components/Pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/slides' component={Home} />
        <Route exact path='/slides/monthly-meetup' component={MonthlyMeetup} />
        <Route exact path='/slides/special-event' component={SpecialEvent} />
        <Route exact path='/slides/code-katas' component={CodeKatas} />
        <Route exact path='/slides/virtual-coffee' component={VirtualCoffee} />
        <Route exact path='/slides/raffle' component={Raffle} />

        <Redirect from='/' to='/slides' />
      </Switch>
    </Router>
  );
}

export default App;
