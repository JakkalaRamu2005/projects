import Home from "./Pages/Home"
import { Routes,Route } from "react-router-dom"
import './css/App.css'
import Favorite from "./Pages/Favorites"
import NavBar from "./components/Navbar"
import { MovieProvider } from "./contexts/MovieContext"

function App() {

return(
  
    <MovieProvider>
       <NavBar/>

      <main className="main-content">
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorite/>}/>

    </Routes>
  </main>
    </MovieProvider>
   

 

)

}


export default App
