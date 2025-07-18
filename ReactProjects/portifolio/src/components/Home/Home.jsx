import React from 'react'
import "./index.css"
const Home = ({greeting, name, profession, description,btn }) => {
  return (

    <div className="home-container">
      <div className='content'>
          
      <div className='about'>
        <h3>{greeting}</h3>
        <h1>{name}</h1>
        <h4>{profession}</h4>
        <p>{description}</p>
       
        <button>{btn}</button>
      </div>
       <div>
        <img src="https://res.cloudinary.com/dcsglluc4/image/upload/v1751214492/download_zilbgx.jpg" alt="" />
      </div>

      </div>
   

    </div>
  )
}

export default Home
