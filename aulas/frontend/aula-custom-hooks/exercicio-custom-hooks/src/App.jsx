import { Cart } from "./components/Cart";
import "./App.css";
import { useCounter } from "./hooks/useCounter";

export default function App() {
  const counter = useCounter({ initial: 0, max: 40, jump: 2, min: 0 })
  
  const counter_02 = useCounter({})

  return (
    <div className="App" >
      {/* <Cart /> */}
      <p>Counter 01</p>
      <p>{ counter.counter }</p>
      <button onClick={counter.increment} >+</button>
      <button onClick={counter.reset} >Reset</button>
      <button onClick={counter.decrement} >-</button>

      <hr />

      <p>Counter 02</p>
      <p>{ counter_02.counter }</p>
      <button onClick={counter_02.increment} >+</button>
      <button onClick={ counter_02.reset} >Reset</button>
      <button onClick={counter_02.decrement} >-</button>
    </div>
  );
}
