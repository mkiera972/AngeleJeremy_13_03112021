import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { getUserProfil } from "../../actions/user";
import UpdateUser from './UpdateUser/UpdateUser';
import AccountContent from './AccountContent/AccountContent';
import { ACCOUNTS_CONTENT } from '../../data/data';

/**
 * @UpdateUser
 * @classdesc COMPONENT USER
 * GET PROFIL USER
 * REDUX AUTH / USER PROFIL / MSG ERROR GESTION
 * @return DISPLAY DATA USER
 */
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

  /**
   * @handleClickEditName DISPLAY BLOCK EDIT PROFIL
   */
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
          {ACCOUNTS_CONTENT.map(({ id, title, amount, description }) => (
                    <AccountContent
                        key = {id}
                        title = {title}
                        amount = {amount}
                        description = {description}
                    />
          ))}
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