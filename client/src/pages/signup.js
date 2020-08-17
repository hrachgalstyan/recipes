import React from 'react'
import {Link} from 'react-router-dom'
import image1 from '../assets/signup.svg'

export default function signup() {
  return (
    <div className="row d-flex justify-content-center flex-wrap-reverse my-4" style={{minHeight: "80vh"}}>
      <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
        <div className="w-75">
        <h2 className="heading-secondary ma-bt-lg px-3">Ստեղծել նոր հաշիվ</h2>
      <form className="form--login px-3 mb-3" id="form--signup">
          <div className="form__group">
            <label className="form__label" htmlFor="email">Անուն Ազգանուն</label>
            <input className="form__input" id="name" type="name" placeholder="Օր․՝ Հասմիկ Սարգսյան" required="required" />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="email">Էլ․ հասցե</label>
            <input className="form__input" id="email" type="email" placeholder="you@example.com" required="required" />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">Գաղտնաբառ</label>
            <input className="form__input" id="password" type="password" placeholder="••••••••" required="required" minLength="8" />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">Կրկնեք գաղտնաբառը</label>
            <input className="form__input" id="passwordConfirm" type="password" placeholder="••••••••" required="required" minLength="8" />
          </div>
          <span className="mb-3">Արդեն ունե՞ք հաշիվ:<Link to="/login" style={{color: "var(--mainGreen)"}}> Մուտք գործեք։</Link></span>
          <div className="form__group my-2 float-right"><button className="btn btn--green mt-3">Գրանցվել</button></div>
      </form>
        </div>
      </div>
      <div className="col-lg-5 col-md-6 col-sm-11 col-11 d-none d-md-flex justify-content-center align-items-center">
        <img src={image1} className="img-fluid" width="100%" height="500px" alt="Cook..." />
      </div>
    </div>
    // <main className="main row mt-5">
    //   <div className="login-form mx-auto p-4 col-lg-4 col-md-8 col-sm-10 col-11 mt-5">
    //       <h2 className="heading-secondary ma-bt-lg px-3">Ստեղծել նոր հաշիվ</h2>
    //       <form className="form--login px-3 mb-3" id="form--signup">
    //           <div className="form__group">
    //             <label className="form__label" htmlFor="email">Անուն Ազգանուն</label>
    //             <input className="form__input" id="name" type="name" placeholder="Օր․՝ Հասմիկ Սարգսյան" required="required" />
    //           </div>
    //           <div className="form__group">
    //             <label className="form__label" htmlFor="email">Էլ․ հասցե</label>
    //             <input className="form__input" id="email" type="email" placeholder="you@example.com" required="required" />
    //           </div>
    //           <div className="form__group ma-bt-md">
    //             <label className="form__label" htmlFor="password">Գաղտնաբառ</label>
    //             <input className="form__input" id="password" type="password" placeholder="••••••••" required="required" minLength="8" />
    //           </div>
    //           <div className="form__group ma-bt-md">
    //             <label className="form__label" htmlFor="password">Կրկնեք գաղտնաբառը</label>
    //             <input className="form__input" id="passwordConfirm" type="password" placeholder="••••••••" required="required" minLength="8" />
    //           </div>
    //           <span className="mb-3">Արդեն ունե՞ք հաշիվ:<Link to="/login" style={{color: "var(--mainGreen)"}}>Մուտք</Link></span>
    //           <div className="form__group my-2 float-right"><button className="btn btn--green mt-2">Գրանցվել</button></div>
    //       </form>
    //   </div>
    // </main>
  )
}
