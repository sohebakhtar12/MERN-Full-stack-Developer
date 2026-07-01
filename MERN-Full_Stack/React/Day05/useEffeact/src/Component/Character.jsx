import { useEffect,useState } from "react";



function Character() {

    const api = "https://hp-api.onrender.com/api/characters";
    
      const [user, setUser] = useState([]);
    
      useEffect(() => {
        fetch(api)
          .then((res) =>res.json())
          .then((data) => {
            setUser(data);
            console.log(data)
          });
      }, []);
  return (
   <>
    <h1>Character</h1>

    <main
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
        width: "100%",
        padding: "20px",
      }}
    >
      {user.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "2px solid black",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              height: "40vh",
             
              backgroundColor:"lightblue",
             

            }}
          >
            <img style={{height:"200px",width:"200px",objectFit:"fill"}} src={item.image} alt="" />
            <h2>Name: {item.name}</h2>
            <p>eyeColour: {item.eyeColour}</p>
            <p>dateOfBirth: {item.dateOfBirth}</p>
          </div>
        );
      })}
    </main>
  </>
  )
}

export default Character