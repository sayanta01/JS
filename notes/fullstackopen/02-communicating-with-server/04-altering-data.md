https://react.dev/reference/react/useEffect#fetching-data-with-effects
- json-server - Get a full fake REST API with zero coding in less than 30 seconds (seriously)
![](https://substackcdn.com/image/fetch/w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7dddcbec-355c-4697-9c52-b560eaa30fab_1600x900.png)
Idempotent - doing it many times gives the same result
Pagination – sending or getting data in chunks (pages) to keep responses fast and light

REST: https://blog.bytebytego.com/p/why-is-restful-api-so-popular
- An HTTP GET request to the URL `notes/3` will return the note that has the id number 3 `notes` URL would return a list of all notes
- Creating a new resource for storing a note is done by making an HTTP POST request
  to the notes URL according to the REST convention that the json-server adheres to
- The data for the new note resource is sent in the body of the request
`axios.post("http://localhost:3001/notes", {
  content: "React is Easy",
  important: true
});`


Sending Data to the Server: 💡
- It's better to let the server generate ids for our resources
![](https://fullstackopen.com/static/c5552febd21af4b5e6da5670e3eba1d0/5a190/20new.png)
- The newly created note resource is stored in the value of the data property of the response object
  Quite often it is useful to inspect HTTP requests in the Network tab of Chrome developer tools
  The tab payload can be used to check the request data
  Also the tab response is useful, it shows what was the data the server responded with
- We must develop a sufficient understanding of the principles of both the JavaScript runtime and React components
  Guessing won't be enough
- It's beneficial to inspect the state of the backend server, e.g. through the browser
  This makes it possible to verify that all the data we intended to send was actually received by the server


Changing the Importance of Notes:
- Individual notes stored in the json-server backend can be modified in two different ways by making HTTP requests to the note's unique URL
  We can either replace the entire note with an HTTP PUT request or only change some of the note's properties with an HTTP PATCH request
- Almost every line of code in the function body contains important details
`const toggleImportanceOf = id => {
  const url = `http://localhost:3001/notes/${id}`
  const note = notes.find(n => n.id === id)
  const changedNote = { ...note, important: !note.important }
  axios.put(url, changedNote).then(response => {
    setNotes(notes.map(n => n.id === id ? response.data : n))
  })
}`
https://en.wikipedia.org/wiki/Object_copying#Shallow_copy - The new object will have the same values as the old one


Extracting Communication with the Backend into a Separate Module:
- The App component has become somewhat bloated after adding the code for communicating with the backend server
https://en.wikipedia.org/wiki/Single-responsibility_principle - A module should be responsible to one, and only one, actor
https://youtu.be/0ZNIQOO2sfA?si=EnO2VzuzT10Jt5YO - Separation of Concerns
- Make sure that when you are organizing and separating your code into parts
  make sure that you are separating it by your actual concerns and not just separating it

- When the App component uses the functions it receives an object that contains the entire response for the HTTP request:
`noteService
  .getAll()
  .then(response => {
    setNotes(response.data)
  })`
- The App component only uses the response.data property of the response object
  The module would be much nicer to use if, instead of the entire HTTP response, we would only get the response data
- Here we no longer return the promise returned by axios directly
  Instead, we assign the promise to the request variable and call its then method:
`const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}`
- We told .then() to take the response and return only response.data `response` - the resolved value of the promise
  so getAll() gives us just the server’s data, not the full response


Cleaner Syntax for Defining Object Literals:
- Shorthand property names
  If key and variable names match, you can skip the colon and just write the name once
- Shorthand method names
  Methods are object functions. Shorthand syntax skips the function keyword


Promises and Errors:
- When user tries to change the importance of a note that has already been deleted from the system 💡
![](https://fullstackopen.com/static/fb3939d7196db5c1bb722bcf8b5ed0ac/5a190/23e.png)
- The application should be able to handle these types of error situations gracefully
- When an HTTP request fails, the associated promise is rejected
  common way of handle rejected promises is to use the catch method

- Removing an already deleted note from the application's state is done with the array filter method
`setNotes(notes.filter(note => note.id !== id))`
- Removes the note with the given ID
- Only keep that return true, after comparing each note.id that is not equal to id
<!-- - Imagine you're going through a basket of fruits and only keeping the ones that are not apples -->
<!-- `fruits.filter(fruit => fruit !== "apple")` -->

<!-- - Computed property: -->
<!-- `const key = "score"; -->
<!-- const obj = { -->
<!--   [key]: 100 -->
<!-- }; -->
<!-- console.log(obj);` // { score: 100 } -->
<!-- - Instead of writing score: 100, -->
<!--   you write [key]: 100, and JS computes that key (looks at the value of key, which is "score") -->


Full stack developer's oath:
- The complexity of our app is now increasing since besides just taking care of the React components in the frontend
  we also have a backend that is persisting the application data
- To cope with the increasing complexity we should extend the web developer's oath to a Full stack developer's oath
Full stack development is extremely hard, that is why I will use all the possible means to make it easier
- I will have my browser developer console open all the time
- I will use the network tab of the browser dev tools to ensure that frontend
  and backend are communicating as I expect
- I will constantly keep an eye on the state of the server to make sure that the data
  sent there by the frontend is saved there as I expect
- I will progress with small steps
- I will write lots of console.log statements to make sure I understand how the
  code behaves and to help pinpoint problems
- If my code does not work, I will not write more code. Instead, I start deleting/commenting
  the code until it works or just return to a state when everything was still working


# Terms
Stack trace

# Vocab
Customary - Usual
Deem - Regard or consider in a specified way
Cope - Deal effectively with something difficult
