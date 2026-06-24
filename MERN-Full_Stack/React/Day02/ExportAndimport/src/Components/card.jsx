
const Card = (props) => {
  return (
    <div>
      <article style={{border:"2px solid black",height:"250px",width:"250px"}}>
        <h1>{props.name}</h1>
        <p>{props.price}</p>
      </article>
    </div>
  )
}

export default Card
