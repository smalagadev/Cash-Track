import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import {Navigationbar} from './components/Navbar';
import {Home} from './components/Home';
import {Contact} from './components/Contact';
import {About} from './components/About';
import {Layout} from './components/layout';

class App  {
  render() {
    return(
      <React.Fragment>
        <Navigationbar />
        <Layout>
          <Switch>
            <Route exact path = "/" component={Home} />
            <Route path = "/about" component = {About} />
            <Route path = "/contact" component = {Contact} />
          </Switch>
        </Layout>
      </React.Fragment>
    );
  }
}


export default App;
