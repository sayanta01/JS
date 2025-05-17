# Pseudo-elements style parts of elements they don’t exist in HTML but behave like extra elements
*,
*::before,
*::after {
  margin: 0 # common reset
  padding: top right bottom left (clockwise)
  box-sizing: border-box
}

Without 'box-sizing: border-box' padding and border are separate from the content
With 'box-sizing: border-box'
- the width and height include the content, padding and border so the element fits the specified size exactly
- margin doesn't count as part of the element's size, regardless of the box-sizing

Vertical Margin Collapsing
Aligning Boxes
- boxes can be inline and block-level
- centering w/ auto-margin

Both <div> and <span> are “container” elements that don’t have any affect on the semantic structure of an HTML document
Start looking at the websites you visit through the lens of the CSS box model, and you’ll see this stuff literally everywhere

# Terms
User agent stylesheet - browser’s default stylesheet
Inheritance - takes the value from the parent
