import React from 'react';
import {Link} from "react-router-dom";
import argentBankLogo from '../../assets/argentBankLogo.png';
import { logout } from '../../actions/auth';
import { connect } from "react-redux";
/**
 * COMPOSANT HEADER
 * Cette classe affiche le header
 */
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render(){
    const { isLoggedIn, userProfil } = this.props;
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
            <img
                className="main-nav-logo-image"
                src={argentBankLogo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
              { isLoggedIn ?
                  <React.Fragment>
                    <Link className="main-nav-item" to="/user">
                      <i className="fa fa-user-circle"></i>
                      {userProfil.firstName}
                    </Link>
                    <Link className="main-nav-item" onClick={this.logOut} to="/signin">
                      <i className="fa fa-sign-out"></i>
                      Logout
                    </Link>
                  </React.Fragment>
                :
                  <Link className="main-nav-item" to="/signin">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                  </Link>
              }
              
            </div>
      </nav>
    );
  }
}

export default connect()(Header);