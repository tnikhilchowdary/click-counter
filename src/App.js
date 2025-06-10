import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const countIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div className='App'>
      <h1>
        The Button has been clicked <span className="count">{count}</span> times
      </h1>
      <p>Click the button to increase the count!</p>
      <button onClick={countIncrease} className="btn">Click Me!</button>
    </div>
  );
}

export default App;

