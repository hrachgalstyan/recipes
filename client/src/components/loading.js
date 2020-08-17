import React from "react"
import food from '../assets/loading.gif'

export default function Loading() {
  return <div className="container mw-50 d-flex justify-content-center align-items-center">
      <img src={food} alt="Loading..." className="img-fluid mw-50" width="300" height="300" />
  </div>
}