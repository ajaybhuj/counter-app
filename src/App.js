import { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };

  return (
    <div className="main">
      <h1 className="heading">Counter App</h1>
      <div className="App">
        <div className="container">
          <div>
            <button onClick={increment}>Increment : +</button>
          </div>
          <div className="counterbox">
            <p className="counter">count:{count}</p>
          </div>
          <div>
            <button onClick={decrement}>Decrement : -</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
