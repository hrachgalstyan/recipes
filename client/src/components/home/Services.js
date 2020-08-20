import React from 'react'
import {GiHealing} from 'react-icons/gi';
import {GiReceiveMoney} from 'react-icons/gi';
import {BsCheckCircle} from 'react-icons/bs';

export default function Services() {
  const services = [
    {
      icon: <GiHealing />,
      title: "Առողջ սնունդ",
      description: "Այստեղ դուք եք որոշում ինչպես պատրաստել և ինչով պատրաստել։"
    },
    {
      icon: <BsCheckCircle />,
      title: "Արդյունավետություն",
      description: "Կայքն աշխատում է առանց դադարների և հանգստյան օրերի:"
    },
    {
      icon: <GiReceiveMoney />,
      title: "Գումարի խնայում",
      description: "Այստեղ չկան կողմնակի ծախսեր։ Դուք վճարում եք միայն ձեր պատրաստածի համար։ "
    }
  ]
  return (
    <div className="container text-center mx-auto">
      <h1 className="title ma-bt-lg px-3 mx-auto font-weight-light">Մեր առավելությունները</h1>
      <div className="row text-center">
        {services.map((item, index) => {
          return(
            <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-xs-8 col-8 my-md-3 my-2 mx-auto">
              <span style={{fontSize: "70px", color: "var(--mainGreen)"}}>{item.icon}</span>
              <h4>{item.title}</h4>
              <p className="py-3 w-75 mx-auto">{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
