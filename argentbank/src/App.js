import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from "react-redux";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Signin from './Components/Signin/Signin';
import User from './Components/User/User';
class App extends React.Component {
  render() {
    const { isLoggedIn, userProfil } = this.props;
    return (
      <Router>
        <Header isLoggedIn={isLoggedIn} userProfil={userProfil}/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/user" component={User}/>
          </Switch>
        <Footer/>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { userProfil }  = state.userReducer
  const { message } = state.message;
  return {
    isLoggedIn,
    userProfil,
    message
  };
}

export default connect(mapStateToProps)(App);
