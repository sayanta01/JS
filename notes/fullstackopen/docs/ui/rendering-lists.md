#
- Display multiple similar components from a collection of data
  use the JavaScript array methods to manipulate an array of data
- The Array object, as with arrays in other programming languages
  enables "storing a collection of multiple items under a single variable name"
  and has members for "performing common array operations"

Rendering data from arrays:
- You will often need to show several instances of the same component using different data when building interfaces
  from lists of comments to galleries of profile images
  In these situations, you can store that data in JS objects and arrays and use methods
  like map() and filter() to render lists of components from them

How to generate a list of items from an array:
1. Move the data into an array
2. Map the people members into a new array of JSX nodes, listItems
`const listItems = people.map((person) => <li>{person}</li>);`
3. Return listItems from your component wrapped in a <ul>
`return <ul>{listItems}</ul>;`

Filtering arrays of items:
- Let’s say you want a way to only show people whose profession is 'chemist'
  You can use JavaScript’s filter() method to return just those people
- This method takes an array of items, passes them through a “test/function”
  and returns a new array of only those items that passed the test
# const chemists = people.filter(person =>
#   person.profession === 'chemist'
# );
- Then, you can map over chemists

- Arrow functions indirectly return the expression right after =>, so you didn’t need a return statement:
# const listItems = chemists.map(person =>
#   <li>...</li> // Implicit return!
# );
- However, you must write return explicitly if your => is followed by a { curly brace!
const listItems = chemists.map(person => { // Curly brace has “block body”
  return <li>...</li>;
});

Keeping list items in order with key:
- Give each array item a key — a string or a number that uniquely identifies it among other items in that array
# <li key={person.id}>...</li> - JSX elements directly inside a map() call always need keys!
- Keys tell React which array item each component corresponds to, so that it can match them up later
  A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree
- Rather than generating keys on the fly, you should include them in your data

Displaying several DOM nodes for each list item: Imagine list where each person needs: name heading & bio paragraph
- The short <>...</> Fragment syntax won’t let you pass a key
  so you need to either group them into a single <div>, or use the slightly longer and more explicit <Fragment> syntax
# <Fragment key={person.id}>
#   <h1>{person.name}</h1>
#   <p>{person.bio}</p>
# </Fragment>
- Fragments disappear from the DOM, so this will produce a flat list of <h1>, <p>, <h1>, <p>, and so on
  <div> (adds an extra element in the HTML)
  Fragment (<>...</> or <Fragment>), does not add extra elements

Where to get your key:
Different sources of data provide different sources of keys:
- Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature

Rules of keys:
- Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays
- Keys must not change or that defeats their purpose! Don’t generate them while rendering

Why does React need keys? 
![](why-keys.png)
- Also don't use an item’s index in the array as its key. In fact
  that’s what React will use if you don’t specify a key at all
- Similarly, do not generate keys on the fly, e.g. with key={Math.random()}
  Instead, use a stable ID based on the data
- Note that your components won’t receive key as a prop. It’s only used as a hint by React itself
  If your component needs an ID, you have to pass it as a separate prop: <Profile key={id} userId={id} />

- When you extract a component, don’t forget to leave the key outside the JSX?

# Terms
Interfaces - way for different parts of a system to communicate with each other


  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <ul>
            {course.parts.map((part) => (
              <li key={part.id}>
                {part.name}: {part.exercises}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );

