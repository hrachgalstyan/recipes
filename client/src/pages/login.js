import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/login.svg'
import axios from 'axios';
import {ShowAlert} from '../components/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    document.querySelector('.submit-btn').textContent = 'Մուտք․․․';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    axios({
      url: '/api/v1/users/login',
      method: 'POST',
      data: {
        email,
        password
      }
    })
      .then((response) => {
        const token = response.data.token;
        const name = response.data.data.user.name;
        localStorage.setItem("jwt", token);
        localStorage.setItem("name", name);
        ShowAlert('success', `😊 Բարև ${name} ջան`);
        window.setTimeout(() => {
          window.location.assign('/');
        }, 1500);
      })
      .catch((err) => {
        console.log(err.response);
        document.querySelector('.submit-btn').textContent = 'Մուտք';
        ShowAlert('error', `❌ ${err.response.data.message}`);
      });
    }

  return (
    <div className="row d-flex justify-content-center flex-wrap-reverse my-4" style={{minHeight: "60vh"}}>
      <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
        <div className="w-75">
          <h2 className="heading-secondary p-3">Մուտք գործեք</h2>
          <form className="form--login px-3 mb-3" id="form--login" onSubmit={handleSubmit}>
              <div className="form__group">
                <label className="form__label" htmlFor="email">Էլ․ հասցե</label>
                <input className="form__input" id="email" type="email" placeholder="you@example.com" required="required" />
              </div>
              <div className="form__group ma-bt-md">
                <label className="form__label" htmlFor="password">Գաղտնաբառ</label>
                <input className="form__input" id="password" type="password" placeholder="••••••••" required="required" minLength="8" />
              </div>
              <span>Դեռ գրանցված չե՞ք։ <Link to="/signup" style={{color: "var(--mainGreen)"}}>Գրանցվել։</Link></span>
            <div className="form__group my-2"><button className="btn btn--green mt-3 submit-btn" type="submit">Մուտք</button></div>
          </form>
        </div>
      </div>
      <div className="col-lg-5 col-md-6 col-sm-11 col-11 d-none d-md-flex justify-content-center align-items-center">
        <img src={image1} className="img-fluid" width="100%" height="500px" alt="Cook..." />
      </div>
      <ToastContainer />
    </div>
  )
}
