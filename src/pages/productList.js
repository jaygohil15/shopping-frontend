import { useEffect, useState } from "react"
import Card from "./components/card"
import './productList.css'
const ProductList = () => {

   const [productData, setProductData] = useState()

   const fetchData = () => {
      fetch(process.env.REACT_APP_PRODUCTLIST)
         .then(res => res.json())
         .then(data => {
            setProductData(data)
         })
   }

   useEffect(() => {
      console.log(process.env.REACT_APP_PRODUCTLIST)
      fetchData()
   }, [])

   return (
      <div className="card-container">
         {!productData ? 'Loading...' :
            productData.map((product, key) =>
               <Card product={product} key={key} />

            )
         }
      </div>
   )
}

export default ProductList