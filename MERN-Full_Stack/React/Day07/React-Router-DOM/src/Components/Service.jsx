import { useEffect } from "react"

function Service() {

  useEffect(() => {
  
    const id = setInterval(() => {
      console.log("AD")
    }, 2000)


    return () => {
      clearInterval(id)
    }

  }, [])

  return (
    <div>
      <h1>Service</h1>
    </div>
  )
}

export default Service
