import "./index.css"
import {Link} from 'react-router'

const Header = () => {
  return (
    <ul className='container'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
    </ul>
  )
}

export default Header
