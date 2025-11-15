![](https://github.com/eludadev/css-docs/blob/main/assets/css_selectors.png?raw=true)
![](https://vsdentalcollege.edu.in/static/media/css.1a50a159.pdf)
https://flukeout.github.io
https://css-speedrun.netlify.app

# Combinators (Relationship Selector)

## Descendant Selector - Selects all <b> elements inside <div> regardless of its nesting level

## Child Selector - Selects only <p> elements that are direct children of <div>

- div > p # Goes only one level of nested elements

```
<div>
  <header> # direct child of div
    <h1>H</h1>
    <p>P</p> # Selected
  </header>
  <footer> # direct child of div
    <section> # not direct child
      <h2>Nested</h2>
      <p>Nested</p> # not Selected
    </section>
  </footer>
<div>
```

## Adjacent Sibling - Next to or beside something, with nothing in between

## General Sibling - Selects all <span> elements that are siblings of <div>

- div ~ span # Does not select nested elements and works on the same scope

```
<div> # reference
  <span>Selected</span> # sibling, so Selected
  <div>
    <span>Not Selected</span> # nested, different parent
  </div>
  <span>Also Selected</span> # sibling, so Selected
  <section>
    <span>Not Selected</span> # different parent
  </section>
</div>
```

# Pseudo Selector

- Pseudo = false/not real—these selectors act like classes but are not explicitly defined in HTML
- Keywords added to CSS selectors that lets you style a specific state/position of the selected element(s)

## Types of Pseudo-classes:

<!-- https://webplatform.github.io/docs/css/selectors/#Pseudo-classes -->

### User Action / State-Based - :hover, :active, :focus

### Structural / Position-Based

- Child-based (All children, tag doesn’t matter)
  :first-child, :nth-child(n), :only-child, :last-child

- Type-based (Only siblings of the same tag)
  p:first-of-type # target the first <p> in its parent

### Functional - :not(), :is(), :where(), :has()

### Form-Related - :disabled :checked, :invalid

## Pseudo-element - Style a specific part of the selected element

- ::before ::after ::selection ::first-line/letter)
- Doesn't work on self-closing tags because they have no content for the pseudo-elements to target

# Attribute Selector - Targets elements with specific attribute or value

- input[type~="text"] # word-match
- [class^="btn-"] # starts-with
- [class$="-icon"] # ends-with
- [class*="menu"] # contains

# Specificity Hierarchy

- inline > id > classes, attributes & pseudo-classes > elements & pseudo-elements
- "order matters" concept only works when all your rules have the same specificity

# Terms

URL Fragments used to navigate to a specific part of a webpage
BEM methodology (Block, Element, Modifier)
https://getbem.com/introduction

# Vocab

Synopsis: Brief summary or general survey of something
