Complex state:
- Saving the click count of both the left and right buttons into a single object:
`const [clicks, setClicks] = useState({
  left: 0,
  right: 0,
});`
- Now the component only has a single piece of state and the event handlers have to take care of changing the entire application state
`const handleLeftClick = () => {
  const newClicks = {
    left: clicks.left + 1,
    right: clicks.right
  }
  setClicks(newClicks)
}`
- It is forbidden in React to mutate state directly
  React follows Unidirectional Data Flow. Meaning, the data flow inside react should and will be expected to be in a circular path
- Changing state has to always be done by setting the state to a new object
  If properties from the previous state object are not changed, they need to simply be copied
  which is done by copying those properties into a new object and setting that as the new state
 Use ...spread to preserve old state when updating objects
- Use objects if the state logically belongs together
- Use separate state if they don’t depend on each other

Handling arrays:
- concat() does not mutate the existing array but rather returns a new copy of the array with the item added to it
- join() returns a new string by joining array elements with a specified separator

Update of the state is asynchronous:
󰋽 State update in React happens asynchronously, i.e. not immediately but "at some point" before the component is rendered again

Conditional rendering:
- React elements depending on the state of the application. This is called conditional rendering

Old React: https://react.dev/reference/react/Component


# Vocab
Comprised - consist of
Concatenate - Join
