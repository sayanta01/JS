Our first major theme will be writing unit and integration tests for the backend
After we have covered testing, we will take a look at implementing user authentication and authorization

# Project structure
- Before testing, modify the structure of project to adhere to Node.js best practices
├── controllers
│   └── notes.js
├── dist
│   └── ...
├── models
│   └── note.js
├── utils
│   ├── config.js
│   ├── logger.js
│   └── middleware.js  
├── app.js
├── index.js
├── package-lock.json
├── package.json

- Using console.log and console.error to print different information from the code ⚒️
  is not a very good way to do things. Separate all printing to the console to its own module utils/logger.js


<!-- how to add react for some files only? -->
<!-- ui matters first -->
<!-- slice vs splice in js -->
<!-- hoisting? -->
<!-- why is important than how -->
<!-- why things are built certain way -->
