// function Header() {
//   const course = "Half Stack App Dev";
//   return <h1>{course}</h1>;
// }
//
// function Content() {
//   const part1 = "Fundamentals of React";
//   const exercises1 = 10;
//   const part2 = "Using props to pass data";
//   const exercises2 = 7;
//   const part3 = "State of a component";
//   const exercises3 = 14;
//   return (
//     <>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//
//       <Total exercises={exercises1 + exercises2 + exercises3} />
//     </>
//   );
// }
//
// function Total({ exercises }) {
//   return (
//     <>
//       <p>Number of exercises {exercises}</p>
//     </>
//   );
// }
//
// function App() {
//   return (
//     <>
//       <Header />
//       <Content />
//     </>
//   );
// }
//
// export default App;

// -----------------------------------------------------------------------------

// Refactor the Content component so that it does not render any names of parts or their number of exercises by itself
// function Header() {
//   const course = "Half Stack App Dev";
//   return <h1>{course}</h1>;
// }
//
// function Part({ name, exercises }) {
//   return (
//     <p>
//       {name} {exercises}
//     </p>
//   );
// }
//
// function Content() {
//   const parts = [
//     { name: "Fundamentals of React", exercises: "10" },
//     { name: "Using props to pass data", exercises: "7" },
//     { name: "State of a component", exercises: "14" },
//   ];
//   return (
//     <>
//       <Part name={parts[0].name} exercises={parts[0].exercises} />
//       <Part name={parts[1].name} exercises={parts[1].exercises} />
//       <Part name={parts[2].name} exercises={parts[2].exercises} />
//
//       <Total
//         exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises}
//       />
//       {/* <Total exercises={parts.reduce((sum, part) => sum + part.exercises, 0)} /> */}
//     </>
//   );
// }
//
// function Total({ exercises }) {
//   return (
//     <>
//       <p>Number of exercises {exercises}</p>
//     </>
//   );
// }
//
// const App = () => {
//   return (
//     <>
//       <Header />
//       <Content />
//     </>
//   );
// };
//
// export default App;

// -----------------------------------------------------------------------------

// Change the course and its parts into a single JavaScript object
const App = () => {
  const course = {
    name: "Half Stack App Dev",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <h1>{course.name}</h1>
      <p>
        {course.parts[0].name} {course.parts[0].exercises}
      </p>
      <p>
        {course.parts[1].name} {course.parts[1].exercises}
      </p>
      <p>
        {course.parts[2].name} {course.parts[2].exercises}
      </p>
    </div>
  );
};

export default App;
