import { useState } from 'react'
import { sculptureList } from "./data"

import "./App.css"

function App() {
  const [value, setValue] = useState(0)

  // function addTask() {
  //   setValue(value + 1)
  // }
  // let sculpture = sculptureList[value]
  return (
    <ol>
      <div className='card'>
        {sculptureList.map((item,index)=>(
  <>
  <h1>{sculptureList[index].name} by {sculptureList[index].artist}</h1>
  <li>{sculptureList[index].description}</li>
  <li><img src={sculptureList[index].url} alt="" /></li>
  </>

 ))}

      </div>
 
    </ol>

  )
}
export default App