<!-- - Users must be able to log into our application -->
<!-- - And when a user is logged in their user information must automatically be attached to any new notes they create -->

https://www.digitalocean.com/community/tutorials/the-ins-and-outs-of-token-based-authentication#how-token-based-works
![Token-Based Authentication](https://fullstackopen.com/static/259c9dce6b3d1d77bedb04e799ac7dd3/5a190/16new.png)

## How JWT Works
- JWT looks random, but it's a SECRET BOX with user info inside!
Example: https://jwt.io/#Debugger
- When you login, we CREATE the token
  * We put user data INSIDE the token
- When you make a request, we DECODE the token
  * We get the user data FROM INSIDE the token

# First implement the functionality for logging in `jsonwebtoken`
<!-- - Find username -->
<!-- - Compare password -->
<!-- - if correct > Generate token -->

# Problem: Only allow logged-in users to create new notes (i.e. have a valid token)
- Change creating new notes so that it is only possible if the post request has a valid token attached
  * The note is then saved to the notes list of the user identified by the token
- Why: To securely identify the logged-in user making the request
## Solution: Only users with a valid JWT can create notes
```💡
Gets the token from request headers (Token says: i'm user #123)
            ↓
Verifies it using process.env.SECRET (Database check: "does user #123 actually exist?)
(checks if it's valid and untampered)
            ↓
if invalid > return 401 error || if valid > gives you decoded user data (e.g., user id) (if yes: You're authenticated!)
```

# Problems of Token-based authentication
## Solution: Token Expiration & Refresh Token Mechanism
- Once the API user, eg. React app gets token, the API has a blind trust to the token holder
  What if the access rights of the token holder should be revoked? There are two solutions
  - The easier one is to limit the validity period of a token
    * The error handling middleware should be extended to give a proper error in the case of an expired token
  - The other solution is to save info about each token to the backend database
    * With this scheme, access rights can be revoked at any time (server-side session)
- JWT must be transmitted over HTTPS to avoid interception
- Token-based > Vulnerable to Cross-Site Scripting
  * React sanitizes all text that it renders, meaning it is not executing the rendered content as JS
- httpOnly cookies > Vulnerable to Cross-Site Request Forgery

# End notes
- We will leave fixing the tests to a non-compulsory exercise
<!-- - We will implement login to the frontend in the next part -->

# Full Lifecycle of Authentication
## Register
User provides username/password
    ↓
Server hashes pswd using bcrypt.hash(pswd, saltRounds) and saves user to database
    ↓
Send 201 Created response
## Login
User sends username/password
    ↓
Server finds user in DB and checks pswd using bcrypt.compare(pswd, user.pswdHash)
- if invalid, Send 401 Unauthorized response
- if valid, Generate JWT token with user's ID and send token to client
    ↓
- Client stores token (in localStorage or React state)
## Access Protected Routes (Authorization) 🚂
Client sends token in Authorization header (Bearer <token>)
    ↓
Server verifies token using jwt.verify(token, process.env.SECRET)
- if invalid/expired, Send 401 Unauthorized response
- if valid, Extract user ID from token payload
    ↓
Grant access to route handler
## Extra
- Routes need to identify who's making the request (DRY)
  * Create tokenExtractor & userExtractor middleware > Attach their respective objects to the request object
- Access Control Models (like Role-Based Access Control)
- Email Verification & OAuth

# Full Error-handling Lifecycle
## How to handle errors?
- Manual: Use try/catch with next(error) inside routes > Pass errors to centralized middleware 🐞
- Automatic: Just use express-async-errors to auto-forward async errors to errorHandler middleware

## Exercise
- Don't validate password with Mongoose — use Express instead (the controller)
- JWT is not related to password; bcrypt is

# Vocab
Bearer: Thing that carries or holds something (authentication scheme)
Revoked: Cancelled
