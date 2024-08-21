import React from 'react';
import "./App.css"

function App() {
  let count = 0;
  return (
    <div className='container'>
      <h1>Use State</h1>
      <h3>Counter : <span id="counter">{count}</span></h3>
      <button type="button" onClick={() =>{
       count++;
       document.getElementById("counter").innerText=count;
       console.log(count);
      }}>
        Increase
      </button>
    </div>
  )
}

export default App
