/* eslint-disable */
import axios from 'axios';
import {
  showAlert
} from './alert';

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'https://baghadratomser.herokuapp.com/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm
      },
    });
    console.log(res);
    if (res.data.status === 'success') {
      showAlert('success', 'You have successfully registered');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};