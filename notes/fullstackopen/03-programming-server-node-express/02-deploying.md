Same origin policy and CORS: Website can only talk to itself, not to other websites — unless allowed
![](https://fullstackopen.com/static/da88e17cb078c89a6e7ba30d61fab0e6/5a190/3ae.png) — server & frontend runs on different origins
- A URL's origin is defined by the combination of protocol (AKA scheme), hostname, and port must be the same
- If the resource is fetched using a url that doesn't share the same origin(scheme, host, port) as the source html
  the browser will have to check the Access-Control-Allow-origin response header
  If it contains * on the URL of the source HTML, the browser will process the response
  otherwise the browser will refuse to process it and throws an error
- The same-origin policy is a security mechanism implemented by browsers 
  in order to prevent session hijacking among other security vulnerabilities
- In order to enable legitimate cross-origin requests (requests to URLs that don't share the same origin)
  W3C came up with a mechanism called CORS(Cross-Origin Resource Sharing) middleware
  The backend is not expected to be visible to the public in the production environment 💡
  it may make more sense to only enable cors from a specific origin (e.g. the front end)


Application to the Internet:
- Use Render for PaaS
- Every commit to GitHub should manually redeploy the app


Frontend production build:
- When the application is deployed, we must create a production build
  A version of the application that is optimized for production - `npm run build`
- This creates a directory called dist which contains the only HTML file of our application (index.html) and the directory assets
  Minified version of our application's JavaScript code will be generated in the dist directory


Serving static files from the backend:
- One option for deploying the frontend is to copy the production build (the dist directory) to the root of the backend directory
  and configure the backend to show the frontend's main page (the file dist/index.html) as its main page
- To do this we need a built-in middleware from Express called static - `app.use(express.static('dist'))`
  whenever Express gets an HTTP GET request it will first check if the dist directory contains 💡
  file corresponding to the request's address. If a correct file is found, Express will return it
- Now HTTP GET requests to the address www.serversaddress.com/index.html or www.serversaddress.com will show the React frontend
  GET requests to the address www.serversaddress.com/api/notes will be handled by the backend code
  / or /index.html - Shows frontend (from dist/index.html)
  www.server.com/api/notes - Runs backend & sends back data (not a static file)
- Unlike when running the app in a development environment
  everything is now in the same node/express-backend that runs in localhost:3001
  ![](https://fullstackopen.com/static/ee40b09299b5cbf969989a2ad320d198/db910/101.png)


The whole app to the internet:
- NOTE: changing the importance DOES NOT work yet since the backend has no implementation for it yet
  Our application saves the notes to a variable. If the application crashes or is restarted,
  all of the data will disappear. The application needs a database 🗄️
- The node/express-backend now runs in the Render server
  When the root address is accessed, the browser loads and executes the React app
  that fetches the json-data from the Render server


Streamlining deploying of the frontend:
- To create a new production build of the frontend without extra manual work
  let's add some npm-scripts to the package.json of the backend repository
  `"build:ui": "rm -rf dist && npm run build && cp -r dist ../backend"`
- The script npm run build:ui builds the frontend and copies the production version under the backend repository


Proxy:
- Changes on the frontend have caused it to no longer work in development mode
  (when started with command npm run dev), as the connection to the backend does not work
- This is due to changing the backend address to a relative URL: const baseUrl = '/api/notes'
  Because in development mode the frontend is at the address localhost:5173
  the requests to the backend go to the wrong address localhost:5173/api/notes. The backend is at localhost:3001

The Problem:
`const baseUrl = "/api/notes"`
- This works in production (because frontend & backend are served together)
  But in development, the request goes to localhost:5173/api/notes
  & there's no backend running on port 5173 - so it fails ❌

The Solution:
- Tell Vite (the frontend dev server) to forward /api requests to the backend
- If the React code makes an HTTP request to a path starting with http://localhost:5173/api
  the request will be forwarded to the server at http://localhost:3001
  Requests to other paths will be handled normally by the development server
`server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
    },
  },
}`
- Now, the requests http://localhost:5173/api/notes
  Vite forwards it to http://localhost:3001/api/notes automatically
- Because everything looks like it's coming from the same origin (5173)
  the browser no longer blocks the requests — so we don’t need CORS anymore in development

Exercises:
- Make sure that the frontend still works locally
  (in development mode when started with command npm run dev)


# Terms
Types of DNS records?
https://youtu.be/HnUDtycXSNE?si=7zeyyBTGpb9GQGEM
Canonical - Official
