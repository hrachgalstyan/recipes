import React from 'react';
import {Link} from 'react-router-dom';
import image from '../assets/Recipes.png';
import google from '../assets/apps.png';

const footer = () => {
  return (
<footer className="page-footer font-small unique-color-dark">

  <div className="container text-center text-md-left mt-5 mx-auto">

    <div className="row mt-3 mx-auto">

      <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4 px-3">

        <h6 className="text-uppercase font-weight-bold"><img src={image} width="200px" alt="..." /></h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
        <p>
          <img src={google} className="mx-auto" width="150px" alt="google" />
        </p>

      </div>
      <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4 px-3">

        <h6 className="text-uppercase font-weight-bold pb-3">Տեղեկատվություն</h6>
        {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" /> */}
        <p>
          <Link to="/about">Մեր մասին</Link>
        </p>
        <p>
          <Link to="/contact">Կոնտակտներ</Link>
        </p>
        <p>
          <Link to="#!">Գաղտնիություն</Link>
        </p>
        <p>
          <Link to="#!">FAQ</Link>
        </p>

      </div>
      <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4 px-3">

        <h6 className="text-uppercase font-weight-bold pb-3">Գործընկերներին</h6>
        {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" /> */}
        <p>
          <Link to="/partners">Համագործակցություն</Link>
        </p>
        <p>
          <Link to="#!">Գովազդ կայքում</Link>
        </p>
        <p>
          <Link to="#!">Գործընկերներին</Link>
        </p>
        <p>
          <Link to="#!"></Link>
        </p>

      </div>

      <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 px-3">

        <h6 className="text-uppercase font-weight-bold pb-3">Կապ</h6>
        {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" /> */}
        <p>
          <i className="fa fa-home"></i> Yerevan/Armenia, 0087 AM</p>
        <p>
          <i className="fa fa-envelope"></i> recipes@mail.ru</p>
        <p>
          <i className="fa fa-phone"></i> +374(44)-44-44-44</p>
        <p>
          <i className="fa fa-link"></i> <Link to="/contact">https://recipes.am/contact </Link></p>

      </div>

    </div>

  </div>
  <div className="footer-copyright text-center py-3">
    <i className="fa fa-facebook p-3" style={{color: "var(--mainGreen)"}}></i>
    <i className="fa fa-instagram p-3" style={{color: "var(--mainGreen)"}}></i>
    <i className="fa fa-telegram p-3" style={{color: "var(--mainGreen)"}}></i>
    <i className="fa fa-google p-3" style={{color: "var(--mainGreen)"}}></i>
    <i className="fa fa-vk p-3" style={{color: "var(--mainGreen)"}}></i>
  </div>
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <Link to="/"> Recipes.am</Link>
  </div>

</footer>
      // <nav className="navbar bg-light-gray p-4 d-flex w-100">
      //   <Link className="navbar-brand pl-5" to="/">
      //     <img src={image} className="img-fluid" width="200px" alt="Recipes.am" />
      //   </Link>
      //     <ul className="nav justify-content-end flex-column">
      //       <div className="nav justify-content-end">
      //         <li className="nav-item px-3 my-auto">
      //           <Link className="nav-link" to="/about" style={{color: "#F7F7F7", opacity: "0.8"}}>Մեր մասին</Link>
      //         </li>
      //         <li className="nav-item px-3 my-auto">
      //           <Link className="nav-link" to="/partners" style={{color: "#F7F7F7", opacity: "0.8"}}>Դառնալ գործընկեր</Link>
      //         </li>
      //         <li className="nav-item px-3 my-auto">
      //           <Link className="nav-link" to="/contact" style={{color: "#F7F7F7", opacity: "0.8"}}>Կապ մեզ հետ</Link>
      //         </li>
      //         <li className="nav-item px-3 my-auto">
      //           <Link className="nav-link" to="/privacy" style={{color: "#F7F7F7", opacity: "0.8"}}>Գաղտնիություն</Link>
      //         </li>
      //       </div>
      //       <div className="nav justify-content-end">
      //         <span className="pt-3 px-3">© 2020 by Hrach Galstyan. </span>
      //       </div>
      //     </ul>
      // </nav>
  );
}

export default footer;
