/* eslint-disable */
import axios from 'axios';
import {
  ShowAlert
} from './alert';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password' ?
      '/api/v1/users/updateMyPassword' :
      '/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') {
      ShowAlert('success', `${type.toUpperCase()} updated successfully!`);
    }
  } catch (err) {
    ShowAlert('error', err.response.data.message);
  }
};