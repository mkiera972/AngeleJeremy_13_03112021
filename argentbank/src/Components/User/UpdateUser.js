import React from 'react';
import { connect } from "react-redux";
import { updateUserProfil } from "../../actions/user";


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

  onChangeInput = e => {
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  handleClickCancelEditName(){
    this.props.handleClickCancelEditName();
  }

  handleUpdateUserInfos() {
    const { dispatch } = this.props;
    dispatch(updateUserProfil(this.state.firstName, this.state.lastName));
  }
  
  render(){
    console.log(this.props.message)
    return (
      <div className="edit-infos">
        {
          this.props.message ?
            <h1 className="success">{this.props.message}</h1>
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
  return {
    user,
    message
  };
}

export default connect(mapStateToProps)(UpdateUser);