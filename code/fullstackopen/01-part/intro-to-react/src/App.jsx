function Header() {
  const course = "Half Stack App Dev";
  return <h1>{course}</h1>;
}

function Content() {
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>

      <Total exercises={exercises1 + exercises2 + exercises3} />
    </>
  );
}

function Total({ exercises }) {
  return (
    <>
      <p>Number of exercises {exercises}</p>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
