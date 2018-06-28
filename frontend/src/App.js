import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Redirect  } from "react-router-dom";
import { Provider } from 'react-redux'

import Car from './components/car'
import Garage from './components/garage'
import Login from './components/login'


import './App.css';

import store from './redux/store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" render={() => (
              localStorage.getItem('token') ? (
                <Redirect to="/garages"/>
              ) : (
                <Garage/>
              )
            )}/>
            <Route exact path="/" component={Login} />
            <Route path="/garages" component={Garage} />
            <Route path="/garages/:id" component={Car} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
