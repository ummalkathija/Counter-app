
import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);


  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  
  const appStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: " #0d5c4d",
    border: "none",
    width: "100%",
    height: "100vh"
  };

  const headingStyle = {
    marginTop:"0px",
    fontSize: "50px",
    marginBottom: "40px",
    color:"lightgray",
    paddingTop:"100px"
  };

  const countStyle = {
        fontSize: "40px",
        fontWeight: "bold",
        margin: "10px auto",
        width: "100px",        
        height: "60px",         
        backgroundColor: "white",
        border: "none", 
        borderRadius: "15%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px"
  };

  const buttonContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  };

  const buttonStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "20px",
    border: "none",
    fontSize: "24px",
    backgroundColor: "#2c2f48",
    color: "white",
    cursor: "pointer"
  };

  return (
    <div style={appStyle}>
      <h1 style={headingStyle}>Counter App</h1>
      <h2 style={countStyle}>{count}</h2>

      <div style={buttonContainer}>
        <button style={buttonStyle} onClick={increment}>+</button>
        <button style={buttonStyle} onClick={decrement}>-</button>
        <button style={buttonStyle} onClick={reset}>0</button>
      </div>
    </div>
  );
}

export default CounterApp;
