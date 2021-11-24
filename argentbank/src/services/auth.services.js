import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/";
/**
 * @AuthService
 * @classdesc API AUTH
 * REGISTER USER
 * LOGIN USER
 * LOGOUT USER
 * @return DATA USER OR LOGOUT DATA USER
 */
class AuthService {
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

  logout() {
    localStorage.removeItem("user");
  }

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