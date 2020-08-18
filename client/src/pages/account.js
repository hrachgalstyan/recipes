import React from 'react';
import axios from 'axios';
import {ShowAlert} from '../components';

export default function Account() {
  const [me, setMe] = React.useState({});

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    axios({
      url: 'api/v1/users/me',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        setMe(response.data.data.data);
        console.log(response.data.data.data);
      })
      .catch((err) => {
        console.log(err.response);
        setMe(null);
      });
    return () => {};
  }, []);
  if(me !== null){
    return (
      <>
      <div>{me.name}</div>
      <div>{me.role}</div>
      </>
    )
  } else {
    ShowAlert('error', '❌ Դուք մուտք չեք գործել:');
    setTimeout(function () {
      window.location.assign('/');
    }, 1500);
  }
}
