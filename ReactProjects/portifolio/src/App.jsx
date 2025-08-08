import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import data from "./components/Home/data"
import Service from "./components/Services/Service"
import Projects from "./components/Projects/Projects"
// import Services from "./components/Services/ServiceCard"
// import ServicesSection from "./components/Services/ServicesSection"
function App() {

  const {greeting,name,profession,description,img,btn}=data[0] 
  // const {title,para} = servicesData

return(
  <>

   <Navbar/>
  <Home greeting={greeting} name={name}  profession={profession} description={description} img={img} btn={btn}/>
  <Service/>
  <Projects/>

 </>
)

}

export default App
