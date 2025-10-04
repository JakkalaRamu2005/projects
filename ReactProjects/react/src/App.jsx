import Header from "./components/Header/Header"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import {Route, Routes,BrowserRouter} from 'react-router'
import Home from "./components/Home/Home"
import NotFound from "./components/NotFound"
import Login from './components/Login/index'


const App = () => {

  return (
    <div>
      
     
      <BrowserRouter>
      <Header />
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<ProductDetails/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
         <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>

  )

}
export default App


