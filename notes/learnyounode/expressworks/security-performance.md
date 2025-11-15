# Security

https://expressjs.com/en/advanced/best-practice-security.html
Do not trust user input

# Performance

https://expressjs.com/en/advanced/best-practice-performance.html

Use a reverse proxy cache to improve performance of serving static assets
https://youtu.be/YkuhqIDUi2A?si=QIdEu5RRdAN_Btk4

https://expressjs.com/en/guide/behind-proxies.html
https://youtu.be/B2G49HZxnRE?si=UXXR_GSMB23ZJS0G

## Development

Always use asynchronous functions
Don't use `console.log() or console.err` these functions are synchronous
For debugging, instead of using console.log(), use a special debugging module like `debug`
For app activity, instead of using console.log(), use a logging library like `Pino`

Use async/await with try...catch for almost everything
Callbacks can’t store async results in variables — you only get data inside the callback
Promises / async-await return a value you can wait on and store like normal code
Using uncaughtException is officially recognized as crude. Listening for uncaughtException is just a bad idea

## Production

Set NODE_ENV to “production” on `package.json` or systemd
Run your app in a cluster
