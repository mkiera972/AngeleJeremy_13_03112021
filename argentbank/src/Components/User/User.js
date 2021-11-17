import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { getUserProfil } from "../../actions/user";
import UpdateUser from './UpdateUser';

class User extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      displayUpdateUser : false,
    };

    this.handleClickEditName = this.handleClickEditName.bind(this);
  }
  
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(getUserProfil());
  }

  handleClickEditName(){
    this.setState({
      displayUpdateUser: !this.state.displayUpdateUser
    });
  }

  render(){
    const { user: currentUser, userProfil, message } = this.props;

    if (!currentUser) {
      return <Redirect to="/signin" />;
    }

    return userProfil.lastName ? 
    (
        <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{userProfil.firstName} {userProfil.lastName}</h1>

          {
            this.state.displayUpdateUser ?
              <UpdateUser userProfil={userProfil} handleClickCancelEditName={this.handleClickEditName} />
            :
              <button className="edit-button" onClick={this.handleClickEditName}>Edit Name</button>
          }   

        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    )
    :
      <main className="main bg-dark">
        <div className="header">{message}</div>
      </main>
  }
}


function mapStateToProps(state) {
  const { user } = state.auth;
  const  { userProfil }  = state.userReducer
  const  { message }  = state.message
  return {
    user,
    userProfil,
    message
  };
}

export default connect(mapStateToProps)(User);