// import Course from "./Course";
//
// const App = () => {
//   const courses = [
//     {
//       name: "Half Stack application development",
//       id: 1,
//       parts: [
//         { name: "State of a component", exercises: 14, id: 1 },
//         { name: "Using props to pass data", exercises: 7, id: 2 },
//       ],
//     },
//     {
//       name: "Node.js",
//       id: 2,
//       parts: [
//         { name: "Routing", exercises: 3, id: 1 },
//         { name: "Middlewares", exercises: 7, id: 2 },
//       ],
//     },
//   ];
//
//   return (
//     <div>
//       <Course courses={courses} />
//     </div>
//   );
// };

// -----------------------------------------------------------------------------

import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatos", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
  // fruits.sort((a, b) => a.calories - b.calories); // Numeric
  // const lowCalFruit = fruits.filter((fruit) => fruit.calories < 100);
  // const highCalFruit = fruits.filter((fruit) => fruit.calories >= 100);

  return (
    <>
      <h1 className="text-3xl text-amber-400 font-bold underline">
        Hello world!
      </h1>

      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
    </>
  );
}

export default App;
