import React from "react"
import food from '../assets/loading.svg'

export default function Loading() {
  return <div className="container d-flex justify-content-center mx-auto">
      <img src={food} alt="Loading..." className="img-fluid my-5" width="150" height="150" />
  </div>
}