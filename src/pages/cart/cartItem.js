
import './cartItem.css'
import { AiFillDelete, AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai'
import { IconContext } from "react-icons";


const CartItem = (props) => {


   const addRemove = (type) => {
      fetch(process.env.REACT_APP_CART, {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            _id: props.product._id,
            type: type
         })
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
         })
   }


   const addOneToCart = () => {
      addRemove('increment')
   }

   const removeOneFromCart = () => {
      addRemove('decrement')
   }

   const removeAllFromCart = () => {
      fetch(process.env.REACT_APP_CART, {
         method: 'delete',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            _id: props.product._id
         })
      })
         .then(res => res.json())
         .then(res => {
            console.log(res)
         })
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