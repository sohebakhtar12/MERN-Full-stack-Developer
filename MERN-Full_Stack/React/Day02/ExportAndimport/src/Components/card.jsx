
const Card = (props) => {
  return (
   
      <article style={{backgroundColor:"lightblue"}}>
        <h1>{props.name}</h1>
        <p>{props.price}</p>
      </article>
    
  )
}

export default Card
