import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import data from "./components/Home/data"
import Services from "./components/Services/ServiceCard"
import ServicesSection from "./components/Services/ServicesSection"
function App() {

  const {greeting,name,profession,description,img,btn}=data[0] 
  // const {title,para} = servicesData

return(
  <>

   <Navbar/>
  <Home greeting={greeting} name={name}  profession={profession} description={description} img={img} btn={btn}/>
  <ServicesSection />

 </>
)

}

export default App
