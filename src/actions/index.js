import axios from "axios";
import setAuthToken from "../services/setAuthToken";

export const registerUser = (user, history) => dispatch => {
  axios
    .post("http://localhost:5000/register", user)
    .then(res => {
      return history.push("/login");
    })
    .catch(err => {
      dispatch({
        type: "GET_ERRORS"
      });
    });
};

export const loginUser = user => dispatch => {
  axios
    .post("http://localhost:5000/login", user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      setAuthToken(token);
      dispatch(getCurrentUser());
    })
    .catch(err => {
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data
      });
    });
};

export const getCurrentUser = () => dispatch => {
  axios.get("http://localhost:5000/me").then(res => {
    dispatch({
      type: "SET_CURRENT_USER",
      payload: res.data
    });
  });
};
export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch({
    type: "LOGOUT_USER"
  });
  history.push("/login");
};
