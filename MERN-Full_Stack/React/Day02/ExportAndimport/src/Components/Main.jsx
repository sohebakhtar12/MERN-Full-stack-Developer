import Card from "./card"

const Main = () => {
  return (
    <>
    <main style={{backgroundColor:"pink",border:"1px solid black",height:"85vh",width:"85vw",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"20px"}}>
         
            <Card name="Laptop" price={10000} />
            <Card name="Mobile" price={500} />
            <Card name="FAN" price={100} />
            <Card name="Bike" price={100} />
            <Card name="Laptop" price={100} />
            <Card name="Laptop" price={100} />
            

         </main>
        

  
      
    </>
  )
}

export default Main
