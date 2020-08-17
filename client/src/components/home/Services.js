import React from 'react'
import {GiHealing} from 'react-icons/gi';
import {GiReceiveMoney} from 'react-icons/gi';
import {FcAssistant} from 'react-icons/fc';
import {GiEarthAfricaEurope} from 'react-icons/gi'
import {GiSandsOfTime} from 'react-icons/gi'

export default function Services() {
  const services = [
    {
      icon: <GiHealing />,
      title: "Առողջ սնունդ",
      description: "Այստեղ դուք եք որոշում ինչպես պատրաստել և ինչով պատրաստել։"
    },
    {
      icon: <FcAssistant />,
      title: "Համեղ և հյութալի",
      description: "բաղադրատոմսեր՝ քայլ առ քայլ հրահանգներով:"
    },
    {
      icon: <GiReceiveMoney />,
      title: "Բացահայտում",
      description: "Այստեղ դուք կարող եք բացահայտել ինչպես՝ հայկական, այնպես էլ՝ այլ խոհանոցների գաղտնիքները։"
    },
    {
      icon: <GiEarthAfricaEurope />,
      title: "Ժամանակակից",
      description: "Աշխարհի վերջին իրադարձությունները ցույց տվեցին, որ վաղն արդեն հասել է, իսկ ով առցանց չէ, շուկայում չէ:"
    },
    {
      icon: <GiSandsOfTime />,
      title: "Արդյունավետ",
      description: "Կայքն աշխատում է առանց դադարների և հանգստյան օրերի: Բաղադրատոմսերը բազմաթիվ են և թարմացվում են շուրջօրյա ռեժիմով:"
    },
    {
      icon: <GiReceiveMoney />,
      title: "Շահութաբեր",
      description: "Այստեղ չկան կողմնակի ծախսեր։ Դուք վճարում եք միայն ձեր պատրաստածի համար։"
    }
  ]
  return (
    <div className="container text-center mx-auto">
      <h1 className="title ma-bt-lg px-3 mx-auto font-weight-light">Մեր ծառայությունները</h1>
      <div className="row text-center">
        {services.map((item, index) => {
          return(
            <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 my-5">
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
