import {useEffect,useState } from "react"

function FetchApi() {
const api="https://dummyjson.com/products"

const[product,setProduct]=useState([])

useEffect(()=>{
    fetch(api)
    .then((reps)=>{
        return reps.json()
    })
    .then((data)=>{

      setProduct(data.products)

    })
},[])
// if(product==0){
//     return <h1>Loading</h1>
// }


 return (
  <>
    {product.length > 0 ? (
      product.map((item) => (
        <h1>{item.title}</h1>
      ))
    ) : (
      <h1>Loading...</h1>
    )}
  </>
);
}                                   


export default FetchApi