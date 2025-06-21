# To Know
- State is any value (object, number, string, etc.) that React tracks and re-renders the component when it changes
- When a parent renders, all the children re-render

https://youtu.be/AwW7olQ84Qs?si=LOXaaavFU3cAAcFu
https://www.joshwcomeau.com/react/why-react-re-renders/

# Lifecycle of React
1. 🧩 App Initialization
User visits site
    ↓
Vite serves index.html
    ↓
<script type="module" src="/src/main.jsx"> loads
    ↓
ReactDOM.createRoot(...).render(<App />)
    ↓
<App /> becomes root of Virtual DOM tree
    ↓
Initial render: React mounts components to real DOM
    ↓
All useState hooks initialize with default values
    ↓
All useEffect hooks with [] dependency schedule to run after render

2. 🧱 Component Mounting & JSX Render Flow
App renders child components (<Login />, <Notes />, <Footer />)
    ↓
Each component = a function that returns JSX
    ↓
JSX is converted to Virtual DOM (React.createElement calls)
    ↓
React Reconciliation: compares new Virtual DOM to previous
    ↓
React Diffing Algorithm: finds minimal changes needed
    ↓
Only changed parts are updated in Real DOM

3. 🔁 React Hooks Lifecycle (useState + useEffect)
Component runs → useState initializes local state
    ↓
useEffect() runs after render (or when deps change)
    ↓
useEffect can:
- Fetch data (GET)
- Read from localStorage
- Set up intervals/events
    ↓
On component unmount → useEffect cleanup runs (optional)


<!-- ----------------------------------------------------------------------- -->
<!-- # 🔥 Ultimate React Lifecycle - Complete Frontend Guide -->
<!---->
<!-- ## 1. 🧩 App Initialization (Vite + React) -->
<!-- ``` -->
<!-- User visits site (localhost:5173) -->
<!--     ↓ -->
<!-- Vite serves index.html -->
<!--     ↓ -->
<!-- <script type="module" src="/src/main.jsx"> loads -->
<!--     ↓ -->
<!-- ReactDOM.createRoot(...).render(<App />) -->
<!--     ↓ -->
<!-- <App /> becomes root of Virtual DOM tree -->
<!--     ↓ -->
<!-- Initial render: React mounts components to real DOM -->
<!--     ↓ -->
<!-- All useState hooks initialize with default values -->
<!--     ↓ -->
<!-- All useEffect hooks with [] dependency schedule to run after render -->
<!-- ``` -->
<!---->
<!-- ## 2. 🧱 Component Mounting & JSX Render Flow -->
<!-- ``` -->
<!-- App renders child components (<Login />, <Notes />, <Footer />) -->
<!--     ↓ -->
<!-- Each component = a function that returns JSX -->
<!--     ↓ -->
<!-- JSX is converted to Virtual DOM (React.createElement calls) -->
<!--     ↓ -->
<!-- React Reconciliation: compares new Virtual DOM to previous -->
<!--     ↓ -->
<!-- React Diffing Algorithm: finds minimal changes needed -->
<!--     ↓ -->
<!-- Only changed parts are updated in Real DOM -->
<!-- ``` -->
<!---->
<!-- ## 3. 🔁 React Hooks Lifecycle (useState + useEffect) -->
<!-- ``` -->
<!-- Component runs → useState initializes/restores local state -->
<!--     ↓ -->
<!-- useEffect() runs after render based on dependency array: -->
<!--     - [] → Run only on mount (data fetching) -->
<!--     - [state] → Run when 'state' changes   -->
<!--     - No array → Run on every render (avoid!) -->
<!--     ↓ -->
<!-- useEffect can: -->
<!--     - Fetch data (GET requests) -->
<!--     - Read from localStorage -->
<!--     - Set up intervals/event listeners -->
<!--     ↓ -->
<!-- On component unmount → useEffect cleanup functions run -->
<!-- ``` -->
<!---->
<!-- ## 4. 🔄 Data Flow: Unidirectional + State Lifting -->
<!-- ``` -->
<!-- Parent holds state (App.jsx) -->
<!--     ↓ -->
<!-- Passes data via props → Child components -->
<!--     ↓ -->
<!-- User interacts in child (form input, button click) -->
<!--     ↓ -->
<!-- Child calls callback function prop (e.g., onClick={handleClick}) -->
<!--     ↓ -->
<!-- Parent updates state (setState) - ASYNCHRONOUS! -->
<!--     ↓ -->
<!-- React schedules re-render → new props passed → updated UI -->
<!--     ↓ -->
<!-- All children with changed props re-render automatically -->
<!-- ``` -->
<!---->
<!-- ## 5. 📦 LocalStorage + Authentication Lifecycle -->
<!-- ``` -->
<!-- App starts → useEffect checks localStorage for token -->
<!--     ↓ -->
<!-- If token exists: -->
<!--     - setUser(savedUser) -->
<!--     - noteService.setToken(token) -->
<!--     ↓ -->
<!-- If no token → Show login form -->
<!--     ↓ -->
<!-- After successful login: -->
<!--     - localStorage.setItem('user', JSON.stringify(user)) -->
<!--     - setUser(user) -->
<!--     - noteService.setToken(user.token) -->
<!--     ↓ -->
<!-- On logout: -->
<!--     - localStorage.removeItem('user') -->
<!--     - setUser(null) -->
<!--     - noteService.setToken(null) -->
<!-- ``` -->
<!---->
<!-- ## 6. 🌐 HTTP Requests & Service Integration -->
<!-- ``` -->
<!-- Component needs data (mount or user action) -->
<!--     ↓ -->
<!-- useEffect or event handler calls service function -->
<!--     ↓ -->
<!-- Service function (services/notes.js) makes HTTP request with axios -->
<!--     ↓ -->
<!-- If authenticated → Authorization header automatically added -->
<!--     ↓ -->
<!-- Promise resolves/rejects with response -->
<!--     ↓ -->
<!-- Component handles response: -->
<!--     - Success: setState with new data -->
<!--     - Error: setErrorMessage with error -->
<!--     ↓ -->
<!-- Component re-renders with new data/error state -->
<!-- ``` -->
<!---->
<!-- ## 7. 📝 Form Handling Lifecycle -->
<!-- ``` -->
<!-- User types in input field -->
<!--     ↓ -->
<!-- onChange event triggers → setState with input value -->
<!--     ↓ -->
<!-- Component re-renders → Input shows updated value (controlled component) -->
<!--     ↓ -->
<!-- User submits form -->
<!--     ↓ -->
<!-- onSubmit event triggers → event.preventDefault() stops page reload -->
<!--     ↓ -->
<!-- Form data processed → Service function called with form data -->
<!--     ↓ -->
<!-- API request sent → Response handled (success/error) -->
<!--     ↓ -->
<!-- Form reset → Input states cleared to empty strings -->
<!--     ↓ -->
<!-- Success/error feedback shown via notification state -->
<!-- ``` -->
<!---->
<!-- ## 8. 🧠 Component Reusability & Composition -->
<!-- ``` -->
<!-- Generic component accepts props and props.children -->
<!--     ↓ -->
<!-- Example: <Togglable buttonLabel="login"><Login /></Togglable> -->
<!--     ↓ -->
<!-- Togglable manages its own internal state (visible/hidden) -->
<!--     ↓ -->
<!-- props.children renders whatever JSX is passed between tags -->
<!--     ↓ -->
<!-- Each instance has independent state and lifecycle -->
<!--     ↓ -->
<!-- Component reused with different content but same behavior -->
<!-- ``` -->
<!---->
<!-- ## 9. 🚦 Conditional Rendering & Lists -->
<!-- ``` -->
<!-- Component renders → JavaScript expressions evaluated in JSX -->
<!--     ↓ -->
<!-- {user === null ? <Login /> : <NoteForm />} -->
<!--     ↓ -->
<!-- Boolean/truthy values determine what JSX to render -->
<!--     ↓ -->
<!-- Array.map() creates list of components: -->
<!--     - notes.map(note => <Note key={note.id} note={note} />) -->
<!--     ↓ -->
<!-- Each list item needs unique 'key' prop for efficient updates -->
<!--     ↓ -->
<!-- Conditional CSS classes: className={note.important ? 'important' : ''} -->
<!-- ``` -->
<!---->
<!-- ## 10. ⚠️ Error Handling + User Feedback -->
<!-- ``` -->
<!-- Async operation fails (network error, 401, 500, etc.) -->
<!--     ↓ -->
<!-- Promise rejects → catch block executes -->
<!--     ↓ -->
<!-- Error state updated → setErrorMessage('Login failed') -->
<!--     ↓ -->
<!-- Component re-renders → <Notification /> shows error -->
<!--     ↓ -->
<!-- setTimeout clears error automatically: -->
<!--     - setTimeout(() => setErrorMessage(''), 5000) -->
<!--     ↓ -->
<!-- User sees visual feedback → Can retry action -->
<!-- ``` -->
<!---->
<!-- ## 11. 🛠 Development vs Production (Vite) -->
<!-- ``` -->
<!-- ### Development (npm run dev) -->
<!-- Vite dev server starts with Hot Module Replacement (HMR) -->
<!--     ↓ -->
<!-- Code changes → Vite rebuilds only changed modules -->
<!--     ↓ -->
<!-- React Fast Refresh preserves component state during updates -->
<!--     ↓ -->
<!-- Browser updates without full page reload -->
<!--     ↓ -->
<!-- React DevTools available for debugging component tree -->
<!---->
<!-- ### Production (npm run build) -->
<!-- Vite bundles and optimizes all code into /dist folder -->
<!--     ↓ -->
<!-- JavaScript minified, CSS optimized, assets hashed -->
<!--     ↓ -->
<!-- Static files can be served by any web server -->
<!--     ↓ -->
<!-- Environment variables (VITE_) replaced with actual values -->
<!-- ``` -->
<!---->
<!-- ## 12. 🚀 Performance Optimizations (Advanced) -->
<!-- ``` -->
<!-- React.memo(Component) → Prevents re-render if props unchanged -->
<!--     ↓ -->
<!-- useCallback(() => fn, [deps]) → Memoizes functions -->
<!--     ↓ -->
<!-- useMemo(() => calculation, [deps]) → Caches expensive calculations -->
<!--     ↓ -->
<!-- Proper key props → Help React identify list items efficiently -->
<!--     ↓ -->
<!-- React.lazy(() => import('./Component')) → Code splitting -->
<!--     ↓ -->
<!-- Avoid inline objects/functions in JSX → Prevents unnecessary re-renders -->
<!-- ``` -->
<!---->
<!-- ## 🎯 **Key React Principles:** -->
<!-- - **Unidirectional Data Flow**: Props down, events up -->
<!-- - **State Immutability**: Always create new objects/arrays   -->
<!-- - **Component Composition**: Build complex UIs from simple pieces -->
<!-- - **Declarative Programming**: Describe what UI should look like -->
<!-- - **Single Source of Truth**: Each state has one authoritative location -->
<!---->
<!-- ## 🔥 **Essential Patterns You'll Use Daily:** -->
<!-- ```javascript -->
<!-- // 1. Controlled Components -->
<!-- const [input, setInput] = useState('') -->
<!-- <input value={input} onChange={e => setInput(e.target.value)} /> -->
<!---->
<!-- // 2. Data Fetching -->
<!-- useEffect(() => { -->
<!--   noteService.getAll().then(setNotes) -->
<!-- }, []) -->
<!---->
<!-- // 3. Event Handling -->
<!-- const handleSubmit = (event) => { -->
<!--   event.preventDefault() -->
<!--   // Process form -->
<!-- } -->
<!---->
<!-- // 4. Conditional Rendering -->
<!-- {user ? <Dashboard /> : <Login />} -->
<!---->
<!-- // 5. List Rendering -->
<!-- {notes.map(note => <Note key={note.id} note={note} />)} -->
<!---->
<!-- // 6. State Updates -->
<!-- setNotes(notes.concat(newNote))  // Add item -->
<!-- setNotes(notes.filter(n => n.id !== id))  // Remove item -->
<!-- setNotes(notes.map(n => n.id === id ? {...n, important: !n.important} : n))  // Update item -->
<!-- ``` -->
<!---->
<!-- ## 📋 **Final Flow Summary:** -->
<!-- ``` -->
<!-- main.jsx → <App /> mounts -->
<!--     ↓ -->
<!-- useState/useEffect hooks initialize -->
<!--     ↓ -->
<!-- Components render with props/state -->
<!--     ↓ -->
<!-- User interactions trigger callbacks -->
<!--     ↓ -->
<!-- Parent state updates → re-render cascade -->
<!--     ↓ -->
<!-- HTTP requests handle data/auth -->
<!--     ↓ -->
<!-- Errors handled → User feedback shown -->
<!--     ↓ -->
<!-- Vite builds optimized production bundle -->
<!-- ``` -->
