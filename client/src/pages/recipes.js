import React from 'react'
import { RecipesContext } from "../context/recipes";
import Pagination from "react-js-pagination";
import Loading from "../components/loading";
import defaultImg from '../assets/kinder.jpg';

export default function Recipes() {
  const {recipes, loading, page, setPage} = React.useContext(RecipesContext);

  function handlePageChange(pageNumber) {
    setPage(pageNumber);
  }
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
                  <div className="card-header bg-transparent d-flex align-items-center" style={{minHeight: '100px'}}>
                    <span className="d-flex justify-content-center align-items-center py-3">
                      <img src={defaultImg} className="img-fluid rounded-circle m-3 my-auto" width="55px" height="55px" alt='default' />
                      <p className="card-title text-left font-weight-bold mr-3 d-flex justify-content-start flex-wrap overflow-hidden" style={{fontSize: '13px'}}>
                        {item.name}
                        <br />
                        <span className="w-100 text-left" style={{opacity: '0.7', color: 'var(--mainGreen)', fontSize: '13px'}}>
                          <i className="fa fa-instagram mr-1" style={{fontSize: '14px', color: "var(--mainGreen)"}} />
                            marycake
                        </span>
                      </p>
                    </span>
                  </div>
                  <div className="card-body" style={{boxSizing: 'border-box'}}>
                    <img className="card-img-top rounded-0" src={`https://baghadratomser.herokuapp.com/images/recipes/${item.image}`} alt={item.name} />
                    <div className="container my-3">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-left pl-3 pl-xs-3 pl-md-2 pl-lg-3 pl-xl-4">
                          <i className="fa fa-map-marker card__icon text-center" style={{color: "var(--mainGreen)", fontSize: '18px'}}></i>
                          <small style={{fontSize: '11px'}} className="text-muted font-weight-normal">Հայկական</small>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-left">
                          <i className="fa fa-calendar card__icon text-center" style={{color: "var(--mainGreen)", fontSize: '18px'}}></i>
                          <small style={{fontSize: '11px'}} className="text-muted font-weight-normal">{time}</small>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-left pl-3 pl-xs-3 pl-md-2 pl-lg-3 pl-xl-4">
                          <i className="fa fa-user card__icon text-center" style={{color: "var(--mainGreen)", fontSize: '18px'}}></i>
                          <small style={{fontSize: '11px'}} className="text-muted font-weight-normal">Անձինք։ {item.people}</small>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-left">
                          <i className="fa fa-star card__icon text-center" style={{color: "var(--mainGreen)", fontSize: '18px'}}></i>
                          <small style={{fontSize: '11px'}} className="text-muted font-weight-normal">Վարկանիշ։ {item.ratingsAverage}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-center align-items-center footer-details" style={{minHeight: '50px'}}>
                    <large className="text-white text-center my-2">Դիտել բաղադրատոմսը</large>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="container text-center mx-auto">
          <Pagination
            activePage={page}
            itemClass="page-item mx-2"
            linkClass="page-link p-3"
            itemsCountPerPage={8}
            hideNavigation={true}
            hideDisabled={true}
            totalItemsCount={40}
            pageRangeDisplayed={4}
            onChange={handlePageChange.bind(this)}
          />
        </div>
      </div>
    )
  }
}
