import { useState } from "react";

let counter = 0;

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const [toto, setToto] = useState(0);
  const [refresh, setRefresh] = useState(0);
  console.log("render");

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setRefresh(refresh + 1)}>refresh</button>
      <p>
        vegie ipsum dolor sit amet, {count} consectetur adipiscing elit. Integer
        nec odio.
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
          setToto(toto + 1);
          console.log(count);
        }}
      >
        increment 2
      </button>
      {counter}
      <button
        onClick={() => {
          counter++;
          console.log(counter);
        }}
      >
        increment
      </button>
    </div>
  );
};

export default CounterComponent;
