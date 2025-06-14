# How to Read React?
- JSX > State > Effects > Handlers > Components > Services

How cors really works? (flowchart)

--------------------------------------------------------------------------------

i want to know how does form works in react i want flow chart like Full Lifecycle of Forms in react

🧾 Full Lifecycle of Forms in React
User sees form on screen (component is mounted)
    ↓
Initial state is set (e.g. useState for input values, errors, loading states)
    ↓
User interacts with form fields (typing, focusing, blurring)
    ↓
onChange/onBlur event triggers handler function
    ↓
Handler updates component state with new input
    ↓
React re-renders with updated input value (controlled input)
    ↓
(Optional) Input validation runs (real-time, onBlur, or debounced)
    ↓
User clicks Submit button
    ↓
onSubmit event handler is triggered
    ↓
Prevent default browser submission (event.preventDefault())
    ↓
Set loading state (disable submit button, show spinner) ⏳
    ↓
Validate all inputs (synchronously or asynchronously)
if validation fails ⛔ > show errors, clear loading state, do not submit
if validation passes ✅ > proceed
    ↓
(Optional) Prepare payload from state (trim, transform, etc.)
    ↓
Send data to backend (e.g. using fetch or axios)
    ↓
Await response from server
    ↓
if success > show confirmation / redirect / reset form 🟢
if error > show error message / stay on form 🔴
    ↓
Clear loading state (re-enable submit button)
    ↓
(Optional) Reset form state and cleanup (if needed)


--------------------------------------------------------------------------------

toggleImportance

Looking at your code, I can see there are actually two different toggle functions that you might be confusing. Let me break down the complete data flow for both:
1. showAll Toggle (Filter Toggle Button)
Lifecycle:
User clicks "show important/all" button
↓
onClick={() => setShowAll(!showAll)} executes
↓
showAll state flips: true > false OR false > true
↓
Component re-renders
↓
notesToShow is recalculated:
  - if showAll = true: notesToShow = all notes
  - if showAll = false: notesToShow = only important notes (note.important === true)
↓
UI updates to show filtered notes
↓
Button text updates: "show important" OR "show all"
2. toggleImportanceOf (Individual Note Toggle)
Lifecycle:
User clicks toggle button on individual Note component
↓
toggleImportance prop function is called with note.id
↓
toggleImportanceOf(id) function executes in App.js:
  │
  ├─ Find the note by id
  ├─ Create changedNote with flipped important status
  ├─ Call noteService.update(id, changedNote)
  │
  ├─ SUCCESS PATH:
  │  ├─ Server responds with updated note
  │  ├─ Update local state: replace old note with updated note
  │  └─ Component re-renders with new note status
  │
  └─ ERROR PATH:
     ├─ Server error (note was deleted)
     ├─ Show error message for 4 seconds
     ├─ Remove note from local state
     └─ Component re-renders without the deleted note
