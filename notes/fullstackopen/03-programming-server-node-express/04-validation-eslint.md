# Why
- There are usually constraints that we want to apply to the data that is stored in our application's database
  Our application shouldn't accept notes that have a missing or empty content property
  The validity of the note is checked in the route handler:
  `if (!body.content) {
     return response.status(400).json({ error: 'content missing' })
   }`
- One smarter way of validating the format of the data before it is stored in the database
  is to use the validation functionality available in Mongoose
  `https://mongoosejs.com/docs/validation.html`💡
  We can define specific validation rules for each field in the schema
  - Built-in Validators: The minLength and required validators are built-in and provided by Mongoose
  - Custom Validators: Functionality allows us to create new validators if none of the built-in ones cover our needs

# Deploying the database backend to production
- The environment variables defined in dotenv will only be used when the backend is not in production mode, i.e. Fly.io or Render
  For production, we have to set the database URL in the service that is hosting our app
- The browser console & network tab has to be open all the time, also vital to follow continuously the server logs
- You will also need to whitelist the fly.io app's IP address in MongoDB Atlas. If you don't MongoDB will refuse the connection
- You shall NOT be deploying the frontend directly at any stage of this part
  It is just backend that is deployed throughout the whole part, nothing else (Monolithic / Combined Deployment)


# Lint: Static program analysis 🧹 Detects/Flags errors
- In the JS universe, the current leading tool for static analysis (aka "linting") is ESlint
- Add ESLint as a development dependency for the backend
  - npm install eslint @eslint/js --save-dev
  - npx eslint --init (ESlint configuration)


# Formatting the Configuration File
```js
import globals from 'globals' // 💡
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { ...globals.node },
      ecmaVersion: 'latest',
    },
]},
```
- The globals property specifies global variables that are predefined
  The spread operator applied here tells ESLint to include all global variables defined in the globals.node settings such as the process
  In the case of browser code we would define here globals.browser to allow browser specific global variables like window, and document
- Use ESLint's recommended settings
  https://eslint.org/docs/latest/use/configure/configuration-files#using-predefined-configurations
  https://eslint.style/packages/js - formatter
  `'rule-name': [<severity>, <option1>, ...]`
- The plugins property provides a way to extend ESLint's functionality by
  adding custom rules, configurations, and other capabilities that are not available in the core ESLint library
  `plugins: {
    "@stylistic/js": stylisticJs,
  }`
- Note for Windows users: The linebreak style is set to unix in the style rules
  It is recommended to use Unix-style linebreaks (\n) regardless of your operating system


# Running the Linter
- Check every file in the project `npx eslint index.js`
  It is recommended to create a separate npm script for linting `"lint": "eslint ."`
- Files in the dist directory also get checked when the command is run
  We do not want this to happen, and we can accomplish this by adding an object with the ignores property
  that specifies an array of directories and files we want to ignore `ignores: ['dist/**']`
- A better alternative to executing the linter from the command line is to configure an eslint-plugin to the editor


# Adding More Style Rules
- ESlint has a vast array of rules that are easy to take into use by editing the eslint.config.mjs file
  https://eslint.org/docs/latest/rules/
<!-- - Let's prevent unnecessary trailing spaces at the ends of lines 🔨 -->
<!--   require that there is always a space before and after curly braces -->
<!--   and also demand a consistent use of whitespaces in the function parameters of arrow functions -->
- Default configuration takes a bunch of predefined rules into use from:
  `export default [ js.configs.recommended ]` https://eslint.org/docs/latest/rules/
  - This includes a rule that warns about console.log commands which we don't want to use
    Disabling a rule can be accomplished by defining its "value" as 0 or off in the configuration file
    `'no-console': 'off'` Disabling the no-console rule will allow us to use console.log statements without ESLint flagging them as issues
- Many companies define coding standards that are enforced throughout the organization through the ESlint configuration file
  Recently many projects have adopted the Airbnb Javascript style guide by taking Airbnb's ESlint configuration into use
  https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb


# Terms
Whitelist: A list of allowed entities
CRLF: Carriage Return Line Feed
Byte order mark
<!-- Add search in Phonebook... -->
