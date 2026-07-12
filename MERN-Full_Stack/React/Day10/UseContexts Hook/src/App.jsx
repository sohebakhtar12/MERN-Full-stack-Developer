import { createContext, useState } from 'react'
import One from './Components/One'


  export const MyContext=createContext()

function App() {
  const[naam,setNaam]=useState("")
  const[lastnaam,setLastNaam]=useState("")




  return (
    <>
      <Provide  value={{naam,lastnaam}}>

        <One/>        
      </Provide>
    </>
  )
}

export default App
