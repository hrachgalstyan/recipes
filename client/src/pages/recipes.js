import React from 'react'
import { RecipesContext } from "../context/recipes";
import Loading from "../components/loading";

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
          return(
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-9 col-10 mb-5 p-3 mx-auto">
              <div className="card">
                {/* header */}
                <div className="view overlay">
                    <img className="card-img-top" src={require(`../assets/recipes/${item.image}`)} alt={item.name} />
                </div>

                <div className="card-body">
                  {/* <h4 className="card-title">{item.name}</h4> */}
                  <p className="card-text">Some quick example text to build on the card title.</p>
                  <button className="btn btn--green" type="button">Details</button>
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
