import React from 'react'
import { RecipesContext } from "../context/recipes";
import Loading from "../components/loading";
import defaultImg from '../assets/kinder.jpg';

export default function Recipes() {
  const {recipes, loading} = React.useContext(RecipesContext);
  if(loading){
    return (
      <Loading />
    )
  } else {
    return (
      <div className="container text-center mx-auto">
        <h1 className="title ma-bt-lg px-3 mx-auto font-weight-light">Ցուցադրված։ {recipes.length}</h1>
      <div className="row text-center mx-auto">
        {recipes.map((item, index) => {
          let date = new Date(item.createdAt);
          let options = {
            year: "numeric",
            month: "long",
            day: "numeric"
          }
          let time = date.toLocaleDateString('en-us', options);
          return(
            <div key={index} className="col-lg-4 col-md-6 col-sm-10 col-xs-11 col-11 mb-sm-3 mb-1 p-3 mx-auto">
              <div className="card mb-3">
                <div className="card-header bg-transparent d-flex align-items-center" style={{minHeight: '110px'}}>
                  <span className="d-flex justify-content-center align-items-center py-3">
                    <img src={defaultImg} className="img-fluid rounded-circle m-3 my-auto" width="55px" height="55px" alt='default' />
                    <p className="card-title text-left font-weight-bold mr-3 d-flex justify-content-start flex-wrap overflow-hidden">
                      {item.name}
                      <br />
                      <span className="w-100 text-left" style={{opacity: '0.7'}}>
                        <i className="fa fa-instagram mr-1" />
                          marycake
                      </span>
                    </p>
                  </span>
                </div>
                <div className="card-body">
                  <img className="card-img-top rounded-0" src={`https://baghadratomser.herokuapp.com/images/recipes/${item.image}`} alt={item.name} />
                  <div className="container my-3">
                    <div className="row mx-2">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-left">
                        <i className="fa fa-map-marker card__icon" style={{color: "var(--mainGreen)", fontSize: '18px'}}></i>
                        <span>Հայկական</span>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-left">
                        <i className="fa fa-calendar card__icon" style={{color: "var(--mainGreen)", fontSize: '18px'}}></i>
                        <span>{time}</span>
                      </div>
                    </div>
                    <div className="row mx-2">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-left">
                        <i className="fa fa-user card__icon" style={{color: "var(--mainGreen)", fontSize: '18px'}}></i>
                        <span>Անձինք։ {item.people}</span>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-left">
                        <i className="fa fa-star card__icon" style={{color: "var(--mainGreen)", fontSize: '18px'}}></i>
                        <span>Վարկանիշ։ {item.ratingsAverage}</span>
                      </div>
                    </div>
                  </div>
                  {/* <button type="button" className="btn btn--green red-text p-1 my-2 ml-3 float-left">Ավելին</button>
                  <i className="fa fa-share text-muted float-right p-1 mr-3 my-auto"></i>
                  <i className="fa fa-heart text-muted float-right p-1 my-auto mr-3"></i> */}
                </div>
                <div className="card-footer" style={{minHeight: '50px'}}>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              {/* <div className="card">
                <div className="view overlay">
                    <img className="card-img-top" src={`https://baghadratomser.herokuapp.com/images/recipes/${item.image}`} alt={item.name} />
                </div>

                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title.</p>
                  <button className="btn btn--green" type="button">Details</button>
                </div>
              </div> */}
            </div>
          )
        })}
      </div>
      </div>
    )
  }
}
