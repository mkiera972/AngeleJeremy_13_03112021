import axios from 'axios';
import authHeader from './auth-header';
import { API_URL } from "../globals/globals";
/**
 * @UserService
 * @classdesc API AUTH
 * GET DATA USER
 * UPDATE PROFIL USER
 * @return DATA USER / DATA USER UPDATE
 */
class UserService {

  /**
   * @getUserProfil
   * GET PROFIL USER
   * @returns DATA USER
   */
  getUserProfil() {
    const bodyParameters = {};
    return axios.post(API_URL + 'user/profile',bodyParameters, {headers : authHeader()});
  }

  /**
   * @updateUserProfil
   * UPDATE USER PROFIL
   * @param {string} firstName firstName user
   * @param {string} lastName lastName user
   * @returns DATA UPDATE PROFIL USER
   */
  updateUserProfil(firstName,lastName) {
    const bodyParameters = {
      firstName,
      lastName,
    };
    return axios.put(API_URL + "user/profile", bodyParameters, {headers : authHeader()});
  }

}

export default new UserService();