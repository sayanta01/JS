https://vite-plugin-ssr.com/

# During development

Serves file faster using native ES Modules (HMR) no bundling requied!⚡
Modern browsers natively understand import/export
Uses plugins for non-standard syntax (JSX/TSX) & framework-specific features

# For production build

Bundles the code with Rollup — highly optimized static assets for production

# Config

Plugin
Proxy — forwards /api requests to http://localhost:3001 in development

<!-- during dev, build, and test time -->

# Axios vs Fetch

it is isomorphic = it can run in the browser and node.js with the same codebase
on the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequest

- Auto json parsing (Server > App) ❌ `res.json()`
- Auto req body serialization (App > Server) ❌ `headers: { 'Content-Type': 'application/json' }, body: JSON.stringify()`
- Smart error handling
- intercept/transform req/res
- Supports timeout
- Cancel request
