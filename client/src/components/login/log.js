import axios from 'axios';

export const log = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'https://baghadratomser.herokuapp.com/api/v1/users/login',
      data: {
        email,
        password,
      }
    });
    console.log(res);
    if (res.data.status === 'success') {
      window.setTimeout(() => {
        window.location.assign('/');
      }, 1000);
    }
  } catch (err) {
    console.log(err);
  }
};