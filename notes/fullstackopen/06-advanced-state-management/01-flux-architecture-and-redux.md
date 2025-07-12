https://youtu.be/LWiMVumNxZ8?si=bhedR6WSsUmU5BPb

# Flux-architecture - Pattern for managing unidirectional data flow in web applications

- Button click → Action created → Dispatcher sends it → Store updates state → React component re-renders
  ![](https://fullstackopen.com/static/7bf90479b6757c7af3b9a9f0e7f19a64/5a190/flux2.png)

# Redux

🔹 “The Tao of Redux”
🔹 “Redux is useReducer on steroids”
🔹 “Lift state up — or Redux it”
<!-- 🔹 “Don’t put derived state in Redux” -->

<!-- https://github.com/reduxjs/redux-templates/tree/master/packages/vite-template-redux -->

- You can start with a single reducer, and as your app grows, split it off into smaller reducers

# Redux Application Data Flow

https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-application-data-flow
![](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)
https://redux-toolkit.js.org/tutorials/quick-start 🚀

<!-- [Clicks Button] -->
<!-- ↓ -->
<!-- dispatch({ type: "ACTION" }) -->
<!-- ↓ -->
<!-- Redux store calls reducer(currentState, action) -->
<!-- ↓ -->
<!-- Reducer returns newState -->
<!-- ↓ -->
<!-- Redux updates store state -->
<!-- ↓ -->
<!-- Components using useSelector see new state -->
<!-- ↓ -->
<!-- React re-renders those components -->

# Uncontrolled form

https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/

- Uncontrolled forms have certain limitations (like dynamic error messages or disabling the submit button based on input are not possible)

## Why use Unique ID Generator (like nanoid):

- Client-side IDs: When there’s no backend yet
- Optimistic updates: Temporarily identify items before server responds
- Unique keys in lists: When there’s no server id

# Forwarding Redux Store to various components

- Share the Redux store with the components

# More components

# https://youtu.be/VenLRGHx3D4?si=dkVCco_OrLJMPve7

## Avoid state managers by:

- Next.js, Server Components
- Storing state in the URL (source of truth)
- TanStack Query
- useContext, useReducer

## Rule of thumb 👍

- State should primarily be used for interactions, not for displaying static or fetched data

## React useContext & useReducer is the lightweight version of Redux

- There would be no useReducer if there were no Redux. "Andrew Clark"
- useContext is like store (prop drilling ❌)
- useReducer is like reducer (for complex, interwined state)

## Limitations of useContext & useReducer

- Unnecessary re-renders
- No async & middleware support

## Limitations of state management libraries

- State is stored in-memory on the client — lost on refresh unless manually persisted (e.g. localStorage)
