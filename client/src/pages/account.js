import React from 'react'
import axios from 'axios'

export default function Account() {
  const [me, setMe] = React.useState(null);

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
      })
      .catch((err) => {
        console.log(err.response);
        setMe(null);
      });
    return () => {};
  }, []);
  return (
    <div>
      my account
    </div>
  )
}
