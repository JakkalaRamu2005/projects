import servicesData from "./ServicesData"
import "./services.css"
import React from 'react'

const Service = () => {
  return (
    <div>
        <h1 className="services-heading">Services Section</h1>
      <ul>
        {servicesData.map((service)=>(
            <li key={service.id}>
                <div className='card-container'>
                <h1>{service.title}</h1>
                <p>{service.description}</p>
                <span>{service.icon}</span>
                </div>
            
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Service
