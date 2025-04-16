# Props are just function arguments, passed as an object, in React components (read-only)
- Destructuring makes the assignment of variables even easier since we can use it to extract
  and gather the values of an object's properties into separate variables

Page re-rendering:
- Manually
`let counter = 1;
const root = ReactDOM.createRoot(document.getElementById('root'));
const refresh = () => {
  root.render(<App counter={counter} />);
};
refresh();
counter += 1;
refresh();
counter += 1;
refresh();`

Stateful component:
- When the state modifying function setCounter is called
  React re-renders the component which means that the function body of the component function gets re-executed
`() => {
  const [ counter, setCounter ] = useState(0)
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  return (
    <div>{counter}</div>
  )
}`
- You can debug the application by logging the values of the component's variables to the console
`console.log('Rendering...', counter)`

Event handling: An event handler is a function
- Button elements support so-called mouse events, of which click is the most common event
- What if we tried to define the event handlers in a simpler form?
  This would completely break our application:
`<button onClick={setCounter(counter + 1)}> Plus </button>` - The event handler is actually a function call ❌
- What's going on? An event handler is supposed to be either a function or a function reference
- Defining event handlers within JSX-templates is not a good idea

Passing state - to child components:
- Write React components that are small and reusable across the application and even across projects
- Often, several components need to reflect the same changing data
  We recommend lifting the shared state up to their closest common ancestor
- Naming choice for the event handler 
  In React, it’s conventional to use onSomething names for props which take functions which handle events and handleSomething

Changes in state cause re-rendering:
Main principles of how an application works
- When the application starts, the code in App is executed
- This code uses a useState hook to create the application state, setting an initial value of the variable counter
- Calling a function that changes the state causes the component to re-render
- Do not ever try to guess what your code does. It is just better to use `console.log` and see with your own eyes what it does

Refactoring the components:
- We can use destructuring to get only the required fields from props

# Vocabs
Streamline - Increasing speed and ease of movement
Evaluate - Compute
Composed - Made up of smaller parts that work together
