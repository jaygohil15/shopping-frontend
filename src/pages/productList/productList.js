import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { initialProductAdd } from "../../redux/productListSlice"
import Card from "./productListItem"
import './productList.css'
const ProductList = () => {

   const [productData, setProductData] = useState()
   const dispatch = useDispatch()

   const count = useSelector((state) => state.productList.value)
   const fetchData = () => {
      fetch(process.env.REACT_APP_PRODUCTLIST)
         .then(res => res.json())
         .then(data => {
            console.log(data, '----data')
            dispatch(initialProductAdd(data))
            setProductData(data)
         })
   }

   useEffect(() => {
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