#
Relative
- moves an element relative to its original position within the document flow
- used as a reference for absolute positioning
# Relatively absolute
Absolute - position elements inside other elements
- always positioned relative to its nearest positioned ancestor (ancestor with position: relative, absolute, or fixed)
- if no positioned ancestor exists, it will be positioned relative to the <html> or <body>
- always finds parent ^upward

Fixed - use on nav
Sticky - acts like a Fixed element when it reaches a defined point
- only works when a top (or other offset) property is set

Stacking Context and z-index - moves on the z-axis

-- Summary --
- Navigation menus should almost always be marked up as a <ul> list instead of a bunch of <div> elements

# Vocab
Offset: displacement or a shift
Laid: put (something) down gently or carefully
