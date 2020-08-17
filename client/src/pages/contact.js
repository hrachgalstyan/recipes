import React from 'react'

export default function contact() {
  return (
    <main className="main row mt-5">
      <div className="login-form mx-auto p-4 col-lg-5 col-md-9 col-sm-10 col-11 mt-5">
          <h2 className="heading-secondary ma-bt-lg px-3 w-100 text-center">Կապ մեզ հետ</h2>
          <form className="form--login px-3 mb-3" id="form--login">
              <div className="form__group">
                <label className="form__label" htmlFor="name">Անուն Ազգանուն</label>
                <input className="form__input" id="name" type="name" placeholder="Օր․՝ Հասմիկ Սարգսյան" required="required" />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="email">Էլ․ հասցե</label>
                <input className="form__input" id="email" type="email" placeholder="you@example.com" required="required" />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="message">Հաղորդագրություն</label>
                <textarea className="form__input" id="message" style={{height: "150px"}} placeholder="Հաղորդագրություն․․․" required="required" />
              </div>
              <div className="form__group my-2 float-right"><button className="btn btn--green">Ուղարկել</button></div>
          </form>
      </div>
    </main>
  )
};

