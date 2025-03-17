import { useState } from "react";

const Display = (props) => {
  return <>{props.counter}</>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };

  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };

  const setToZero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  return (
    <>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="Plus" />
      <Button onClick={setToZero} text="Zero" />
      <Button onClick={decreaseByOne} text="Minus" />
    </>
  );
};

export default App;

// ----------------------------------------------------------------------------

// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age;
//   return (
//     <>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </>
//   );
// };
//
// const App = () => {
//   const name = "Peter";
//   const age = 10;
//   return (
//     <>
//       <h1>Greetings</h1>
//       {/* Pass props to Hello */}
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </>
//   );
// };
//
// export default App;
