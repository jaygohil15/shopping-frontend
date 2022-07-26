
import { useState, useEffect } from 'react'
import './cart.css'
import CartItem from './cartItem'

export default function Cart() {

   const [cartData, setCartData] = useState()

   const fetchData = () => {
      fetch(process.env.REACT_APP_CART)
         .then(res => res.json())
         .then(data => {
            setCartData(data)
            // console.log(data)
         })
   }

   useEffect(() => {
      fetchData()
   }, [])

   return (
      <div className="cart">
         {!cartData ? 'Loading...' : cartData.map((prod, key) =>
            <CartItem product={prod} key={key} />
         )}
      </div>
   )
}