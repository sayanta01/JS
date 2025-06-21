https://youtu.be/JpM9hiQTlAk?si=D0D8PBPXV5178Ja_

# Displaying the login form only when appropriate
- Login form appears when the user presses the login button. User can close the login form by clicking the cancel button
- Extract the login form into its own component
<!-- - props is just an object passed to a component -->
<!-- - Destructure when you're using named props directly inside the component -->
<!--   Don’t destructure if you're treating props as a whole object -->
- The state and all the functions related to it are defined outside of the component and are passed to the component as props
## One fast way of implementing the functionality is to change the loginForm function
- The App component state now contains the boolean loginVisible
  which defines if the login form should be shown to the user or not

# The components children, aka. props.children <!-- (component inside component) -->
- The code related to managing the visibility of the login form could be considered to be its own logical entity
  and for this reason, it would be good to extract it from the App component into a separate component

<!-- - The way that the component is used is slightly different from our previous components? how -->
## Why: Reusable you can use it to add similar...?
- The goal is to implement Togglable component (LoginForm is a child component of Togglable)
- You can add any React elements between the opening and closing tags of Togglable
<!-- - The child components are the React elements defined between the opening and closing tags of a component -->
<!-- - The props.children is an empty array. If a component is defined with an automatically closing /> -->
```js
<Togglable buttonLabel="reveal">
  <LoginForm /> {/* LoginForm is a child component of Togglable */}
  <p>this line is at start hidden</p>
</Togglable>
```

The Togglable component is reusable and we can use it to add similar visibility toggling functionality to the form that is used for creating new notes.
Before we do that, let's extract the form for creating notes into a component:


# State of the forms




