import { useState, useMemo} from "react"


function App() {

  const [n,setN]=useState(1)

  const [text,setText]=useState("")
  
  function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

function nthPrime(n) {
    let count = 0;
    let num = 1;

    while (count < n) {
        num++;

        if (isPrime(num)) {
            count++;
        }
    }

    return num;
}

let ans=useMemo(()=>nthPrime(n),[n]) 



  return (
    <div>
      <div>
        <h1>{n}th prime is {ans}</h1>

        <input type="text" onChange={(e)=>{
          setN(Number(e.target.value))
        }} />
      </div>

      <div>
        <input type="text" onChange={(e)=>{
          setText(e.target.value)
        }}/>

        <h1>{text}</h1>
      </div>
      
    </div>
  )
}

export default App
