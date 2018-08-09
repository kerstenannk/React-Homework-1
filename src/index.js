import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

const Home = () => (
<Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/happy">Happy</Link>
        </li>
        <li>
          <Link to="/guilty">Guilty</Link>
        </li>
        <li>
          <Link to="/sleepy">Sleepy</Link>
        </li>
      </ul>

      <hr />

     
      <Route path="/happy" component={Happy} />
     <Route path="/guilty" component={Guilty} />
      <Route path="/sleepy" component={Sleepy} />
    </div>
  </Router>
);

class Main extends Component{
  render(){
    return(
      <Home />
    )
  }
}

ReactDOM.render( <Main />, document.getElementById('root') );
