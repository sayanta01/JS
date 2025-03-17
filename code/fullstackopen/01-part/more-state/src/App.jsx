import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }

  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // const [clicks, setClicks] = useState({
  //   left: 0,
  //   right: 0,
  // });

  // const handleLeftClick = () => {
  //   setClicks({ ...clicks, left: clicks.left + 1 }); // Spreads Out
  // };

  // const handleRightClick = () => {
  //   setClicks({ ...clicks, right: clicks.right + 1 });
  // };

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  // const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  // const handleLeftClick = () => {
  //   setAll(allClick.concat("L")); // creates a new array by joining "L" to the existing allClick array
  //   const updateLeft = left + 1;
  //   setLeft(updateLeft);
  //   setTotal(updateLeft + right);
  // };

  // const handleRightClick = () => {
  //   setAll(allClick.concat("R"));
  //   const updateRight = right + 1;
  //   setRight(updateRight);
  //   setTotal(left + updateRight);
  // };

  return (
    <>
      {left}
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {right}
      {/* <p>{allClick.join(" ")}</p> */}
      {/* <p>total {total}</p> */}
      <History allClick={allClicks} />
    </>
  );
};

export default App;
