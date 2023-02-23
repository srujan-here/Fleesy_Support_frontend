import axios from "axios";
const API_URL = "https://sore-jade-viper-coat.cyclic.app/api/users/";
const LOGIN_URL = "https://sore-jade-viper-coat.cyclic.app/api/users/login";

//register
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  // if (response.data) {
  //   localStorage.setItem("user", JSON.stringify(response.data));
  // }

  return response.data;
};

//login
const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//logout

const logout = async () => {
  localStorage.removeItem("user");
};

const authservice = {
  register,
  login,
  logout,
};

export default authservice;
