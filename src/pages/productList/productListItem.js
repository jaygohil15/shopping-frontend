import './productListItem.css'
import { removeOnePoduct } from '../../redux/productListSlice'
import { useDispatch } from 'react-redux'

const ProductListItem = (props) => {

   const dispatch = useDispatch()

   const addToCart = () => {

      fetch(process.env.REACT_APP_CART, {
         headers: {
            'Content-Type': 'application/json',
            // 'Accept': 'application/json'
         },
         method: 'POST',
         body: JSON.stringify({
            ...props.product,
            quantity: 1
         })
         // body: JSON.stringify({
         //    _id: props.product._id,
         //    name: props.product.name,
         //    image: props.product.image,
         //    desc: props.product.desc,
         //    quantity: 1,
         //    price: props.product.price
         // })
      })
      // .then(res => {
      //    console.log(res.json())
      // })
      // .then(data => {
      //    console.log(data)
      // })

      dispatch(removeOnePoduct(props.product._id))
   }

   return (
      <>
         <div className="card1">
            <img src={props.product.image} alt="Denim Jeans" style={{ width: '100%' }} />
            <h1>{props.product.name}</h1>
            <p className="price">Price: {props.product.price}</p>
            <p className="price">{props.product.quantity} Available</p>
            <p><button onClick={addToCart}>Add to Cart</button></p>
            <p className='desc'>{props.product.desc}</p>
         </div>
      </>
   )
}

export default ProductListItem