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
        
      </div>
      </div>
    )
  }
}
