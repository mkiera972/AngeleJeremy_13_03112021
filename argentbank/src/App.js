import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Signup/Signup';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signup" component={Signup}/>
          </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
