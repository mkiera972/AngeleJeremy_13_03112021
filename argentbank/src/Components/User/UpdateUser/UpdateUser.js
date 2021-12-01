import React from 'react';
import { connect } from "react-redux";
import { updateUserProfil } from "../../../actions/user";

/**
 * @UpdateUser
 * @classdesc COMPONENT UpdateUser
 * UPDATE PROFIL USER
 * REDUX AUTH / MESSAGE ERROR GESTION
 * @return DISPLAY MESSAGE IF UPDATE OK
 */
class UpdateUser extends React.Component {
  constructor(props){
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this);
    this.handleUpdateUserInfos = this.handleUpdateUserInfos.bind(this);

    this.state = {
      firstName: this.props.userProfil.firstName,
      lastName: this.props.userProfil.lastName,
    };
  }

  /**
   * @onChangeInput
   * @param {objet} e 
   * GET DATA FROM INPUT AND UPDATE STATE
   */
  onChangeInput = e => {
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  /**
   * @handleClickCancelEditName
   * SEND ACTION TO COMPONENT PARENT
   */
  handleClickCancelEditName(){
    this.props.handleClickCancelEditName();
  }

  /**
   * @handleUpdateUserInfos
   * SEND TO REDUX ACTION UPDATE USER AND CALL API
   * @return USER DATA UPDATE
   */
  handleUpdateUserInfos() {
    const { dispatch } = this.props;
    dispatch(updateUserProfil(this.state.firstName, this.state.lastName));
  }
  
  render(){
    return (
      <div className="edit-infos">
        {
          this.props.message 
          ?
            <h1 className={this.props.statusMessage}>{this.props.message}</h1>
          :
            ""
        }
        <div className="edit-infos-user">
          <input type="text" id="firstName" name="firstName" required onChange={this.onChangeInput} value={this.state.firstName}/>
          <input type="text" id="lastName" name="lastName" required onChange={this.onChangeInput} value={this.state.lastName}/>
        </div>
        <div className="edit-infos-actions">
          <button onClick={this.handleUpdateUserInfos}>Save</button>
          <button onClick={() => this.handleClickCancelEditName()}>Cancel</button>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { user } = state.auth;
  const { message } = state.message;
  const { statusMessage } = state.message;
  return {
    user,
    message,
    statusMessage
  };
}

export default connect(mapStateToProps)(UpdateUser);