import React from 'react'
import { RecipesContext } from "../context/recipes";
import Loading from "../components/loading";

export default function Recipes() {
  const {recipes, loading} = React.useContext(RecipesContext);
  console.log(recipes);
  if(loading){
    return (
      <Loading />
    )
  } else {
    return (
      <div className="container text-center mx-auto">
        <h1 className="title ma-bt-lg px-3 mx-auto font-weight-light">Ցուցադրված։ {recipes.length}</h1>
      <div className="row text-center">
        {recipes.map((item, index) => {
          return(
            // <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 my-5">
            //   <span style={{fontSize: "70px", color: "var(--mainGreen)"}}>{item.icon}</span>
            //   <h4>{item.name}</h4>
            //   <p className="py-3 w-75 mx-auto">{item.image}</p>
            // </div>
            <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mb-5 p-3">
              {/* <div className="card border-0 p-3">
                <img className="card-img-top img-fluid" src="https://baghadratomser.herokuapp.com/img/recipes/recipes-1.jpg" alt="xasxasxas" />
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <a href="/login" className="btn btn--green float-right">Details</a>
                </div>
              </div> */}
              <div className="card">
                {/* header */}
                <div className="card__header">
                  <div className="card__picture">
                    <div className="card__picture-overlay">&nbsp;</div>
                    <img className="card__picture-img" src="https://i.picsum.photos/id/412/250/250.jpg?hmac=MMv_Qhe3amX1GkZ00ns6ObqgqB7gH1wRyHvFQKkr0c0" alt={item.name} />
                  </div>
                  <h3 className="heading-tertirary">
                    {item.name}
                  </h3>
                </div>

                {/* details */}
                <div className="card__details">
                  <h6 className="card__sub-heading">Բարդությունը։ {item.difficulty}</h6>
                  <p className="card__text">Այս բաղադրատոմսը համեղ է և ձեր օրը սկսելու հիանալի միջոց:</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      </div>
    )
  }
}
