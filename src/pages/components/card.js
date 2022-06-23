import './card.css'

const card = (props) => {

   const addToCart = () => {
      console.log(props.product)
      fetch(process.env.REACT_APP_CART, {
         headers: {
            'Content-Type': 'application/json'
         },
         method: 'POST',
         body: JSON.stringify(props.product)
      })
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

export default card