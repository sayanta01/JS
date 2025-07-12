import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
export function Counter() {
  const count = useSelector((state) => state.counter.value); // count
  const dispatch = useDispatch(); // setCount

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const number = Number(inputValue);
    if (!isNaN(number)) {
      dispatch(incrementByAmount(number));
      setInputValue("");
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>

        <form onSubmit={handleSubmit}>
          Count
          <input
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default Counter;
