<!-- https://youtu.be/JpM9hiQTlAk?si=BN0RWkhBi3XZjTtF -->
<!-- https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children -->

# Displaying the login form only when appropriate
- Start by extracting the login form into its own component
  * Keep only elements & state that are directly needed for that component — lift everything else to the parent
  * State & handlers should stay in the parent (App) and be passed as props
<!-- - `props` is just an object passed to a component -->
<!--   * Destructure if you only need specific values -->
<!--   * Don’t destructure if you need the whole object -->

## One fast way of implementing the functionality is to change the loginForm function
- App component state contain the boolean loginVisible which defines if login form should be shown or not
  * Toggle the value of loginVisible with buttons

1. loginVisible = false → form hidden
2. On log-in button click → setLoginVisible(true) → re-render
3. Now loginVisible = true → form visible
4. On cancel button click → setLoginVisible(false) → form hidden

## Extracting components and showing them conditionally includes:
- Component Composition
- Props Passing
- Conditional Rendering with ternary operator
- Conditional Styling via inline style

<!-- - Where is conditional rendering used in real React apps? -->

# The components children, aka. props.children - Nested component
- The code related to managing the visibility of the login form could be considered to be its own logical entity
  and for this reason, it would be good to extract it from the App component into a separate component
- props.children is used for providing the child components to the component
  * The child components are the React elements that we define between the opening and closing tags

## Why: Reusable, we can use it to add similar visibility toggling functionality
- Can add any React elements between the opening and closing tags of Togglable
- Same component (Togglable), different content and different button label

<!-- - App → passes LoginForm as children to Togglable -->
<!-- - Togglable → shows/hides children based on visible -->
<!-- - LoginForm → rendered when visible, uses passed props -->
```js
[1] App Component
    └── Renders:
        <Togglable buttonLabel="login">
          <LoginForm ... /> {/* child component of Togglable */}
        </Togglable>
          - props.buttonLabel = "login"
          - props.children = <LoginForm ... />
[2] Togglable Component 💡
    - Uses state to manage visibility
    - Conditionally renders:
    |     - button with props.buttonLabel
    |     - props.children only when visible
    └── When visible:
        {props.children} = <LoginForm ... />
[3] LoginForm Component
    └── Receives props & Renders form
```

# Sharing State Between Components
- Sometimes, you want the state of two components to always change together
  To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props
- Keep state local unless multiple components need it

## STATE PLACEMENT DECISION
Does another component need this state?
  - NO → Keep it local
  - YES → Continue
Are the components siblings or share parent?
  - YES → Lift state to closest common parent
  - NO → Continue
How many levels to pass props?
  - if 1-2 levels → Pass props down
  - if 3-4 levels → Consider Context/Redux/Zustand
if Global state (Auth, Theme, Notifications)
  - Use Context/Redux/Zustand regardless of levels

What to PASS UP: Events & Data 
- User interactions: onClick, onSubmit
- Final values: onChange (final values only)  
- Operation results: onSuccess, onError

## Data Flow
App renders <NoteForm createNote={addNote} /> & Passes addNote function down
    ↓
User types → NoteForm updates it's local state with setNewNote
    ↓
User clicks "save" → handleSubmit runs in NoteForm
    ↓
NoteForm calls props.createNote({ content, important: true })
<!-- - calls the function with the new note → 🔄 data goes up -->
    ↓
App's addNote() runs
    ↓
noteService.create(...) sends note to backend
    ↓
Backend responds → App updates notes state with setNotes(...) → React re-renders

- The only way to send data from child to parent is by calling a function passed down from the parent
  Because of unidirectional data flow in React — parent to child
  To send data back up, the child must call the parent's callback function, which updates the parent's state

# References to components with ref
- Goal: After a new note is created, hide the new note form
- Problem: The visibility is controlled with the visible state variable inside of Togglable component
  But React doesn't allow parent to access a child component's internal state directly
- Solution: Find a mechanism to change the state of the component externally
  The ref mechanism of React, which offers a reference/shortcut to the component

https://youtu.be/oCMsejd6ovM?si=_JQUsMRzR3_tQK7c 💡
## useRef, forwardRef Flow (Accessing Child Functions from Parent)
Child Setup:
- `const Togglable = ({ ref: externalRef, buttonLabel, children }) => {...}` // React 19
<!-- - Child is wrapped with `forwardRef()` // Allows the child to receive the ref from the parent -->
<!-- - Child uses `useImperativeHandle(ref, () => {})` // Lets the child decide what methods the parent can access -->
Parent Usage:
- Parent creates a ref with useRef() `const noteFormRef = useRef()` // Create the remote reference
- Parent attaches the ref to the child `<Togglable ref={noteFormRef}>...</Togglable>` // Attach remote to child
- Parent calls the child's exposed method via `ref.current.methodName()` // Press a button on the remote

<!-- - useImperativeHandle lets you customize the handle exposed as a ref -->
<!-- - The ref attribute is used for assigning a reference to each of the components in the variables togglable1, togglable2 and togglable3 -->

<!-- useRef: is like a sticky note on your desk -->
<!-- - You jot something down and refer back to it anytime -->
<!--   Stays the same through updates and doesn’t cause re-render -->
<!-- - Holds value that persists across renders (variable that doesn’t reset) -->
<!--   Does not trigger re-renders when the value changes -->
<!--   Provides direct access to real DOM nodes `inputRef.current.focus()` -->
<!--   Keeping mutable values between renders (without re-rendering) -->

# ESlint in the frontend (Part3)
- Vite has installed ESlint by default, define your desired configuration in the .eslintrc.cjs file
