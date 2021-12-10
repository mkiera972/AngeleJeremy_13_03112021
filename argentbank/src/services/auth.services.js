import axios from "axios";
import { API_URL } from "../globals/globals";

/**
 * @AuthService
 * @classdesc API AUTH
 * REGISTER USER
 * LOGIN USER
 * LOGOUT USER
 * @return DATA USER OR LOGOUT DATA USER
 */
class AuthService {
  /**
   * @login
   * @param {string} email 
   * @param {string} password 
   * @returns CREDENTIAL / TOKEN USER
   */
  login(email, password) {
    return axios
      .post(API_URL + "user/login", { email, password })
      .then((response) => {
        if (response.data.body.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  /**
   * @logout
   * DESTROY DATA USER IN LOCALSTORAGE
   */
  logout() {
    localStorage.removeItem("user");
  }

  /**
   * @register
   * @param {string} firstName firstName user
   * @param {string} lastName lastName user
   * @param {string} email email user
   * @param {string} password password user
   * CREATE USER IN DATABASE 
   * @returns NEW USER
   */
  register(firstName,lastName, email, password) {
    return axios.post(API_URL + "user/signup", {
      firstName,
      lastName,
      email,
      password,
    });
  }
}

export default new AuthService();