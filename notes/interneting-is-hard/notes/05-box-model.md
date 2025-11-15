- Start looking at the websites you visit through the lens of the CSS box model, and you’ll see this stuff literally everywhere

# Generic Boxes

- Both <div> & <span> are “container” elements that don’t have any affect on the semantic structure of an HTML document

# CSS Reset

<link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
https://www.joshwcomeau.com/css/custom-css-reset/

# Gotchas

Without 'box-sizing: border-box' padding and border are separate from the content
With 'box-sizing: border-box'

- The width and height include the content, padding and border so the element fits the specified size exactly
- Margin doesn't count as part of the element's size, regardless of the box-sizing

Vertical Margin Collapse
Aligning Boxes

- Boxes can be inline & block-level
- Centering w/ auto-margin

# Terms

User agent stylesheet: Browser’s default stylesheet
