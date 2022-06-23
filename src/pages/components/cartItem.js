
import './cartItem.css'
import { AiFillDelete, AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai'
import { IconContext } from "react-icons";


const CartItem = (props) => {

   const addOneToCart = () => {
      console.log('jay')
   }

   const removeOneFromCart = () => {

   }

   const removeAllFromCart = () => {

   }

   return (
      <div className="cart-item">
         <img src={props.product.image} alt='NA' />
         <div className='cart-item-container-1'>
            <p className='title'>{props.product.name}</p>
            <p>Qty: {props.product.quantity}</p>
            <p>₹{props.product.price}</p>
         </div>
         <div className='cart-item-container-2' >
            <IconContext.Provider value={{ color: '#3AB0FF', size: '2em' }} >
               <button onClick={removeOneFromCart}><AiOutlineMinusSquare /></button>
               <button onClick={addOneToCart}><AiOutlinePlusSquare /></button>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#F32424', size: '2em' }} >
               <button onClick={removeAllFromCart}><AiFillDelete /></button>
            </IconContext.Provider>
         </div>
      </div>
   )
}

export default CartItem