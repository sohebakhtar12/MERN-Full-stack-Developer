import { useEffect,useState } from "react";



function Todos() {

    const api = "https://jsonplaceholder.typicode.com/todos/";
    
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
    <h1>Todos</h1>

    <main
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
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
              height: "150px",
              backgroundColor:"lightblue"
            }}
          >
            <h2>Title: {item.title}</h2>
            <p>Completed: {item.completed}</p>
            {/* <p>dateOfBirth: {item.dateOfBirth}</p> */}
          </div>
        );
      })}
    </main>
  </>
  )
}

export default Todos