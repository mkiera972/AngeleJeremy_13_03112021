import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3001/api/v1/';

class UserService {
  headerConfig = {
    headers : authHeader()
  };
  getUserProfil() {
    const bodyParameters = {};
    return axios.post(API_URL + 'user/profile',bodyParameters, this.headerConfig);
  }

  updateUserProfil(firstName,lastName) {
    const bodyParameters = {
      firstName,
      lastName,
    };
    console.log(bodyParameters)
    return axios.put(API_URL + "user/profile", bodyParameters, this.headerConfig);
  }

}

export default new UserService();