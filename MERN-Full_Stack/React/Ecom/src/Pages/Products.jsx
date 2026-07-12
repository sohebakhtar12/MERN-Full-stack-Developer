import { useEffect, useState } from "react"
import Loader from "../Component/Loader"
import Card from "../Component/Card"



const Products = ({setCart, cart}) => {

  const[data,setData] = useState([])

  useEffect(() => {

    async function getData()
    {
      const res = await fetch("https://dummyjson.com/products?limit=194")
      const apiData = await res.json()
      setData(apiData.products)
    }

    getData()

  }, [])

  if(data.length == 0)
  {
    return (
      <div className="flex justify-center items-center h-[90vh]">
        <Loader />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 p-4">
      
    {
      data.map((item) => {
        return <Card cart={cart} setCart={setCart} info={item} />
      })
    }


    </div>
  )
}

export default Products