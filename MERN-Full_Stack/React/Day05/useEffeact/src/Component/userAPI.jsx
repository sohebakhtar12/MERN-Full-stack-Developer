import { useEffect, useState } from "react";


const api = "https://jsonplaceholder.typicode.com/users";

function UserAPI() {
  // const api = "https://jsonplaceholder.typicode.com/users";
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
    <h1>User</h1>

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
            <h2>Name: {item.name}</h2>
            <p>Username: {item.username}</p>
            <p>Email: {item.email}</p>
          </div>
        );
      })}
    </main>
  </>
)}

export default UserAPI;