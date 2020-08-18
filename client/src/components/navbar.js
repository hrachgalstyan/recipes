import React from 'react';
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';
import {UserContext} from '../context/user';
import image from '../assets/Recipes.svg';
import defaultImg from '../assets/default.jpg';

export default function Navbar() {
  const {user} = React.useContext(UserContext);

  function handleHide(){
    const navbar = document.getElementById('navbarText');
    navbar.classList.remove('show');
  };

  async function logOut() {
    localStorage.removeItem('name');
    localStorage.removeItem('jwt');
    window.location.assign('/');
  }

  if(user !== null) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-sm-5 d-flex" style={{zIndex: '100'}}>
        <Link className="navbar-brand" to="/" onClick={handleHide}>
          <img src={image} width="200px" alt="Recipes.am" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <FaAlignRight style={{fontSize: "32px", color: "var(--mainGreen)", opacity: "0.8"}} />
        </button>
        <div className="collapse navbar-collapse align-center pb-3 pb-lg-0" id="navbarText">
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
            <li className="nav-item-dropdown dropdown pl-lg-3 py-2 my-auto d-flex justify-content-center align-items-center">
              <span className="nav-link dropdown-toggle d-flex justify-content-center align-items-center" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={defaultImg} className="img-fluid rounded-circle" width="40px" height="40px" alt='default' />
                <p className="nav-link pl-3 text-center">{user.name}</p>
              </span>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item p-2" to="/me">Իմ հաշիվը</Link>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item p-2" type="button" onClick={logOut}>Դուրս գալ</button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-sm-5 d-flex" style={{zIndex: '100'}}>
          <Link className="navbar-brand" to="/" onClick={handleHide}>
            <img src={image} width="200px" alt="Recipes.am" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <FaAlignRight style={{fontSize: "32px", color: "var(--mainGreen)", opacity: "0.8"}} />
          </button>
          <div className="collapse navbar-collapse align-center pb-3 pb-lg-0" id="navbarText">
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