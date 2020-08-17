import React from 'react'
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa'
import image from '../assets/Recipes.svg';

function navbar() {

  function handleHide(){
    const navbar = document.getElementById('navbarText');
    navbar.classList.remove('show');
  };

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

export default navbar;
