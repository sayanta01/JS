https://github.com/expressjs/express/tree/master/examples/mvc

# Request

A client submits an HTTP request message to a server, which returns a response
The request must use one of several request methods such as GET, POST, and so on

## Middleware

- app.use(express.static("public")) // ✏️
- app.use(express.json())
- app.use(express.urlencoded({ extended: true }))
- app.use(helmet());
- app.use(cors()) // ✏️
- app.use(morgan("tiny"))
- app.use(compression());
- requestLogger - Before routes
- unknownEndpoint - After routes
- error handling

### Serve static files

Make the public/ folder the root directory for all static file requests
`app.use(express.static(path.join(__dirname, "public")))` <!-- __dirname == pwd -->

### Error Handling (Worst of Express.js)

Sync: `app.get('/', (req, res) => { throw new Error("BROKEN") })` // Express will catch this on its own
Async: Errors occur later, NOT caught automatically - it only understands callbacks, not Promises
- try/catch — You must manually pass them to next(err) OR `express-async-errors` — Monkey-patching
- Just use Async wrapper 💡 `const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)`
No standard error format - Create you own centralized global error handler

Error object `.message, .stack`
Response object `.status(), .send(), .json(), .render(), .set()`

## Utility

Utils are helper functions or modules used inside middleware or routes
they don’t run automatically like middleware, but only when explicitly called

- lodash, dayjs — Utility library
- dotenvx — Configuration helper

### Router

https://expressjs.com/en/guide/routing.html

- Create modular, mountable route handlers
- A Router instance is a complete middleware and routing system
  it is often referred to as a “mini-app” capable only of performing middleware and routing functions

- Joins parent parameters to child route `const router = express.Router({ mergeParams: true })`
- app.js has the parent route `app.use('/users/:user!d/birds', birdsRouter)`
- Router files have the child routes `router.get('/about', ...); // /users/:user!d/birds/about`
- When a user sends a request with the path parameters it joins the /usrs/:user!d/birds with the /about

### Dynamic routes

- Handle multiple resources
- Generate dynamic content
- Extract parameters from the URL
- The client sends a variable in the URL, so the server can access it
  through the `req.params` object to query specific data from the database

### Template engine

- HTML with placeholder (Templated > JSX)
- Render dynamic data into HTML on the server — especially when you don’t have a separate frontend

# Response

A server returns an HTTP response message to the client
The res contains completion status info about the request & might also contain requested content in its message body

<!-- ----------------------------------------------------------------------- -->

Why do we use POST instead of GET for forms? 💡
CommonJS vs ESM? - Async, Reference
Zod - Validate data before it reaches controller

<!-- JSON.parse - JSON to JS object -->
<!-- JSON.stringify - Opposite of JSON.parse -->
<!-- res.json - Sends JSON to client -->
<!---->
<!-- Content-Type: application/x-www-form-urlencoded -->
<!-- name=sayanta&age=22 -->
<!---->
<!-- Content-Type: application/json -->
<!-- { "name": "sayanta", "age": 22 } -->
