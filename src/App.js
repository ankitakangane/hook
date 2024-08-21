import React,{ useState,useEffect } from 'react';
import "./App.css";

function App() {
  const [count,setCount] = useState(0);
  useEffect(() => {
    console.log(`Welcome To Counter App`)
  },[]);
  useEffect(() => {
    console.log(`${count} is ${count % 2 == 0 ? 'Even' : 'Odd'}`)
  },[count])
  return (
    <div className='container'>
      <h1>Use State</h1>
      <h3>Counter : {count}</h3>
      <button type="button" onClick={() =>{
       setCount(count + 1);
        console.log(count);
      }}>
        Increase
      </button>
    </div>
  )
}

export default App
