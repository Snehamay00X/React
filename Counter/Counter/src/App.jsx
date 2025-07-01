import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  function increaseNum() {
    counter += 1;
    if (counter > 0 && counter <= 10) {
      setCounter(counter);
    }
  }
  function decreaseNum() {
    counter -= 1;
    if (counter >= 0 && counter < 10) {
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Hello World:{counter}</h1>
      <button onClick={increaseNum}>Up</button>
      <br />
      <button onClick={decreaseNum}>Down</button>
    </>
  );
}

export default App;
