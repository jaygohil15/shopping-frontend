
import { Link } from 'react-router-dom'
import './navbar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
   return (
      <>
         <navbar className='navbar'>
            <p className='navbar-item navbar-header' >Shop</p>
            <p className='navbar-item' ><Link to='/productlist' >Product List</Link></p>
            <Link to='/cart' ><p className='navbar-item' >Cart <AiOutlineShoppingCart /></p></Link>
         </navbar>

      </>
   )
}

export default Navbar