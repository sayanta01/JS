#
- CSS rules consist of selectors and declarations
- Using element types for defining CSS rules is slightly problematic
  If our application contained other li tags, the same style rule would also be applied to them

Inline styles:
- Any React component or element can be provided with a set of CSS properties as a JavaScript object through the style attribute
- Every CSS property is defined as a separate property of the JavaScript object
  Numeric values for pixels can be simply defined as integers
  `{ color: green; font-style: italic; }` ✔️
  `{ color: 'green', fontStyle: 'italic' }` ❌
- Inline styles come with certain limitations. For instance, so-called pseudo-classes can't be used straightforwardly
- Traditionally, it has been considered best practice to entirely separate CSS from the content (HTML) and functionality (JavaScript)
  According to older school of thought, the goal was to write CSS, HTML, and JavaScript into their separate files
- The philosophy of React is, in fact, the polar opposite separate files did not seem to scale well in larger applications
- The structural units that make up the application's functional entities are React components
  A React component defines the HTML for structuring the content
  the JavaScript functions for determining functionality, and also the component's styling; all in one place
  This is to create individual components that are as independent and reusable as possible


Couple of important remarks:
- If the state were only saving "one thing",
  a more appropriate initial value would be null denoting that there is nothing in the state at the start
- You can't .map() on null
  useState([]) (an empty array) instead of null
- Another way to bypass the problem is to use conditional rendering
  Suitable in cases where it is impossible to define the state so that the initial rendering is possible
  return null if the component state is not properly initialized: 💡
  `if (!notes) { 
    return null 
  }`
- The second parameter of useEffect is used to specify how often the effect is run
  The principle is that the effect is always executed after the first render of the component
  and when the value of the second parameter changes
- Use conditional logic to prevent unnecessary API calls
