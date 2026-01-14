 import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "./action";

function App() {
  const count = useSelector((state) => state.count); 
  const dispatch = useDispatch(); 

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Redux</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(incrementCounter())}>
         increment
      </button>
    </div>
  );
}

export default App;
