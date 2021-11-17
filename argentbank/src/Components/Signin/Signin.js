import React from 'react';
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Redirect } from 'react-router-dom';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    
        this.state = {
          username: "",
          password: "",
          loading: false,
        };
      }

    onChangeEmail(e) {
        this.setState({
          email: e.target.value,
        });
    }
    
    onChangePassword(e) {
        this.setState({
          password: e.target.value,
        });
    }


    handleLogin(e) {
        e.preventDefault();
        const { dispatch, history } = this.props;

        dispatch(login(this.state.email, this.state.password))
        .then(() => {
            history.push("/user");
        })
        .catch(() => {
            this.setState({
            loading: false
            });
        });
    }

  render(){
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      return <Redirect to="/user" />;
    }
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={this.handleLogin}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label
                    ><input type="text" id="username" required onChange={this.onChangeEmail}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label
                    ><input type="password" id="password" required onChange={this.onChangePassword}/>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                    >Remember me</label
                    >
                </div>
                <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(Signin);