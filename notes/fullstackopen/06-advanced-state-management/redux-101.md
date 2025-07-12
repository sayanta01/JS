https://redux-toolkit.js.org/introduction/getting-started
https://daveceddia.com/javascript-references/

<!-- https://www.quirksmode.org/blog/archives/2015/07/stop_pushing_th.html -->
<!-- https://stackoverflow.com/questions/70478224/what-is-main-difference-between-redux-and-redux-toolkit-is-saga-required-in-red -->

# Concepts and Terms

- One-way data flow
- Extract the shared state from the components, and put it into a centralized location outside the component tree
- Can integrate with any UI framework
- The Redux DevTools Extension shows a history of the changes to the state in your Redux store over time

## Terminology

- Store: Single source of truth (one store to rule them all) created by passing in a reducer
  Has a method called getState that returns the current state value
- Actions: Plain JavaScript objects that has a type field (describes what you want to do?)
  Descriptive name, like "todos/todoAdded"
- Action Creators: Function that creates and returns an action object
  Thunk = Delayed
- Reducers: Pure functions that take the current state and an action, and returns a new state
  <!-- - Event listener which handles events based on the received action (event) type -->

  Reducers must always follow some specific rules:
  <!-- - Must be pure function -->
  <!-- - Never mutate state directly (read-only) -->

  The logic inside reducer functions typically follows the same series of steps:

  <!-- - Check to see if the reducer cares about this action -->
  <!--   - if so, make a copy of the state, update the copy with new values, and return it -->
  <!-- - Otherwise, return the existing state unchanged -->

- Dispatch: The only way to update the state is to call store.dispatch() method
  The store will run its reducer function. We can call getState() to retrieve the updated value

- Selectors: Functions to extract specific pieces of information from a store state value

# Redux App Structure

- Typical React/Redux app to see how the pieces fit together

# Basic Redux Data Flow

- Some important patterns and guidelines for using Redux

```js
function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  );
}

// -----------------------------------------------------------------------------

const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === "counter/increment") {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1,
    };
  }
  // otherwise return the existing state unchanged
  return state;
}
```

# To-Know

Why Are They Called Reducers?

- The Array.reduce() method lets you take an array of values, process each item in the array one at a time
  and return a single final result. You can think of it as "reducing the array down to one value"
  <!-- - A Redux reducer function is exactly the same idea as this "reduce callback" function! -->
  <!--   Takes a "previous result" (the state), and the "current item" (the action object) -->
  <!--   decides a new state value based on those arguments, and returns that new state -->
