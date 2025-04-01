import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}> {props.text}</button>;
};

const App = () => {
  const [value, setValue] = useState(10);

  const handleClick = () => {
    console.log("clicked the button");
    setValue(0);
  };

  const setToValue = (newValue) => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  // Do not define components inside another component
  const Display = (props) => <div>{props.value}</div>;

  return (
    <div>
      {value}
      <Display value={value} />
      <button onClick={() => console.log("clicked the button")}>log</button>
      <button onClick={() => setValue(0)}>set</button>
      <button onClick={handleClick}>btn</button>

      {/* <button onClick={setToValue("function")}>f</button> */}
      {/* <button onClick={setToValue(1000)}>thousand</button> */}
      {/* <button onClick={setToValue(value + 1)}>increment</button> */}

      {/* Passing props to the component */}
      <Button onClick={() => setToValue(1000)} text="thousand" />
    </div>
  );
};

export default App;
