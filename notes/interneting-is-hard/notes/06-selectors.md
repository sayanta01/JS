# ![](https://github.com/eludadev/css-docs/blob/main/assets/css_selectors.png?raw=true)
https://flukeout.github.io
https://css-speedrun.netlify.app

Combinators
- li.red - any li w/ the class of red
- Descendant Selector - Selects all <b> elements inside <div> regardless of its nesting level
# div b {}
# <div>
#   <span>
#     <b>Nested</b>
#   </span>
# </div>

- Child Selector - Selects only <p> elements that are direct children of <div>
div > p # selects only one level of nested elements
# <div>
#   <header> # direct child of div
#     <h1>H</h1>
#     <p>P</p> # Selected
#   </header>
#   <footer> # direct child of div
#     <section> # not direct child
#       <h2>Nested</h2>
#       <p>Nested</p> # not Selected
#     </section>
#   </footer>
# <div>

- General Sibling - Selects all <span> elements that are siblings of <div>
div ~ span # does not select nested elements and works on the same scope
# <div> # reference
#   <span>Selected</span> # sibling, so Selected
#   <div>
#     <span>Not Selected</span> # nested, different parent
#   </div>
#   <span>Also Selected</span> # sibling, so Selected
#   <section>
#     <span>Not Selected</span> # different parent
#   </section>
# </div>

- Adjacent Sibling - Next to or beside something, with nothing in between
h1 + p # only the first <p> right after <h1>
# <h1>Selected</h1>
# <p>Selected</p>
# <p>Not Selected</p> # because it's not immediately after <h1>

![](https://vsdentalcollege.edu.in/static/media/css.1a50a159.pdf)
- "Pseudo" = false/not real—these selectors act like classes but are not explicitly defined in HTML
  Instead of being applied manually in the markup (class="example")
  they automatically style elements when they meet certain conditions

Pseudo-class - targets elements based on their state
Types of Pseudo-class:
- User Interaction / State-Based - :hover, :focus, :active
- Structural / Position-Based - :first-child, :nth-child()
  p:last-of-type { color: white; } # target the last <p> in it's parent
- Form-Related - :checked, :disabled, :required, :invalid
- Logical / Functional - :not(), :is(), :has(), :where()
- Link State - :link, :visited
- Target and UI State - :lang(), :dir()

Pseudo-element - targets a specific part of an element's content (e.g., ::before ::after ::selection ::first-line/letter)
- Don't work on self-closing tags because they have no content for the pseudo-elements to target

https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
Attribute Selector # Targets elements with specific attributes or attribute values
- input[type="text"]
- [class^="btn-"]  # starts with
- [class$="-icon"] # ends with
- [class*="menu"]  # contains

Specificity Hierarchy
- Inline styles > IDs > Classes, attributes, pseudo-classes > Elements, pseudo-elements
- "order matters" concept only works when all your rules have the same specificity

URL Fragments - used to navigate to a specific part of a webpage

# Terms
BEM methodology (Block, Element, Modifier)
https://getbem.com/introduction

# Vocab
Synopsis: brief summary or general survey of something
