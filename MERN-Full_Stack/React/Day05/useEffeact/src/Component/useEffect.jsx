

import { useState,useEffect } from 'react'

function UseEffect() {


    const api ="https://hp-api.onrender.com/api/characters"

    const [d,setD] = useState([])

    useEffect(()=>{
        fetch(api)
        .then((res)=>{
            return res.json()
        })
        .then((d)=>{
            setD(d)
        })
    },[])

  return (
    <>
        <h1>Harry Potter Char</h1>

        <div>
            {d.map((item)=>{
                return <h1>{item.name}</h1>
            })}
        </div>
    </>
  )
}

export default UseEffect