import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/checkout/information' component={Information} />
        <Route exact path='/cheackout/payment' component={Payment} />
        <Route exact path='/cheackout/success' component={Success} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;