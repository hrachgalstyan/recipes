import React from 'react';
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';
import {UserContext} from '../context/user';
import {ShowAlert} from './alert';
import axios from 'axios';
import image from '../assets/Recipes.svg';
import defaultImg from '../assets/default.jpg';

export default function Navbar() {
  const {user} = React.useContext(UserContext);

  function handleHide(){
    const navbar = document.getElementById('navbarSupportedContent');
    navbar.classList.remove('show');
  };

  async function logOut() {
    axios({
      url: '/api/v1/users/logout',
      method: 'GET'
    })
      .then((response) => {
        if(response.data.status === 'success'){
          localStorage.removeItem('name');
          localStorage.removeItem('jwt');
          ShowAlert('error', `😊 Մենք կսպասենք քեզ։`)
          window.setTimeout(() => {
            window.location.assign('/');
          }, 1500);
        }
      })
      .catch((err) => {
        ShowAlert('error', `❌ ${err.response.data.message}`);
      });
  }

  if(user !== null) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light px-4 mx-lg-5 d-flex" style={{zIndex: '100'}}>
        <Link className="navbar-brand" to="/" onClick={handleHide}>
          <img src={image} width="200px" alt="Recipes.am" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FaAlignRight style={{fontSize: "32px", color: "var(--mainGreen)", opacity: "0.8"}} />
        </button>
        <div className="collapse navbar-collapse align-center pb-3 pb-lg-0" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto pr-3">
            <li className="nav-item px-3 py-2 my-auto">
              <Link className="nav-link text-center" to="/recipes" style={{fontSize: "18px", color: "rgba(0, 0, 0, 0.8)", opacity: "0.8"}} onClick={handleHide}>Բաղադրատոմսեր</Link>
            </li>
            <li className="nav-item px-3 py-2 my-auto">
              <Link className="nav-link text-center" to="/advices" style={{fontSize: "18px", color: "rgba(0, 0, 0, 0.8)", opacity: "0.8"}} onClick={handleHide}>Խորհուրդներ</Link>
            </li>
            <li className="nav-item px-3 py-2 my-auto">
              <Link className="nav-link text-center" to="/shop" style={{fontSize: "18px", color: "rgba(0, 0, 0, 0.8)", opacity: "0.8"}} onClick={handleHide}>Խանութ</Link>
            </li>
            <li className="nav-item px-3 py-2 my-auto d-lg-none d-flex justify-content-center align-items-center">
              <Link to='/me' className="nav-link d-flex justify-content-center align-items-center" onClick={handleHide}>
                <img src={defaultImg} className="img-fluid rounded-circle" width="40px" height="40px" alt='default' />
                <p className="nav-link pl-3 text-center">{user.name}</p>
              </Link>
            </li>
            <li className="nav-item px-3 py-2 my-auto d-lg-none d-flex justify-content-center align-items-center">
              <button className="nav-link text-center btn btn--red mx-3" style={{fontSize: "18px", color: "rgba(240, 52, 52, 0.8)"}} onClick={logOut}>Դուրս գալ</button>
            </li>
            <li className="nav-item-dropdown dropdown pl-lg-3 py-2 my-auto d-none d-lg-flex justify-content-center align-items-center">
              <span className="nav-link dropdown-toggle d-flex justify-content-center align-items-center" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={defaultImg} className="img-fluid rounded-circle" width="40px" height="40px" alt='default' />
                <p className="nav-link pl-3 text-center">{user.name}</p>
              </span>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item p-2 py-3" to="/me" onClick={handleHide}>Իմ հաշիվը</Link>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item p-2 py-3" type="button" onClick={logOut}>Դուրս գալ</button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 mx-lg-5 d-flex" style={{zIndex: '100'}}>
          <Link className="navbar-brand" to="/" onClick={handleHide}>
            <img src={image} width="200px" alt="Recipes.am" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FaAlignRight style={{fontSize: "32px", color: "var(--mainGreen)", opacity: "0.8"}} />
          </button>
          <div className="collapse navbar-collapse align-center pb-3 pb-lg-0" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto pr-3">
              <li className="nav-item px-3 py-2 my-auto">
                <Link className="nav-link text-center" to="/recipes" style={{fontSize: "18px", color: "rgba(0, 0, 0, 0.8)", opacity: "0.8"}} onClick={handleHide}>Բաղադրատոմսեր</Link>
              </li>
              <li className="nav-item px-3 py-2 my-auto">
                <Link className="nav-link text-center" to="/advices" style={{fontSize: "18px", color: "rgba(0, 0, 0, 0.8)", opacity: "0.8"}} onClick={handleHide}>Խորհուրդներ</Link>
              </li>
              <li className="nav-item px-3 py-2 my-auto">
                <Link className="nav-link text-center" to="/shop" style={{fontSize: "18px", color: "rgba(0, 0, 0, 0.8)", opacity: "0.8"}} onClick={handleHide}>Խանութ</Link>
              </li>
              <li className="nav-item pl-lg-3 py-2 my-auto">
                <Link className="nav-link text-center" to="/login" style={{fontSize: "18px", color: "rgba(0, 0, 0, 0.8)", opacity: "0.8"}} onClick={handleHide}>Մուտք</Link>
              </li>
              <li className="nav-item px-3 py-2 my-auto mx-auto">
                <Link className="nav-link text-center btn btn--green mx-auto" to="/signup" style={{fontSize: "18px", color: "var(--mainGreen)", opacity: "0.8"}} onClick={handleHide}>Գրանցվել</Link>
              </li>
            </ul>
          </div>
        </nav>
      )
    }
}