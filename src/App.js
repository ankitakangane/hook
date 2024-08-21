import React,{ useState } from 'react';
import "./App.css";

function App() {
  const [count,setCount] = useState(0);
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
