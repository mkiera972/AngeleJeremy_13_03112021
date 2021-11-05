import React from 'react';
import {Link} from "react-router-dom";
import argentBankLogo from '../../assets/argentBankLogo.png';

/**
 * COMPOSANT HEADER
 * Cette classe affiche le header
 */
class Header extends React.Component {
  render(){
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="./index.html">
            <img
                className="main-nav-logo-image"
                src={argentBankLogo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
              <Link className="main-nav-item" to="/signup">
                <i className="fa fa-user-circle"></i>
                Sign In
              </Link>
            </div>
      </nav>
    );
  }
}

export default Header;