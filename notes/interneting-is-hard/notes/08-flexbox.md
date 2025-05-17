#
https://flexbox.malven.co
# ![](https://raw.githubusercontent.com/eludadev/css-docs/main/assets/css_flexbox.png)
https://flexboxfroggy.com

# Row --
l justify-content - main (horizontal)
u align-items     - cross (vertical)
# Column |
u justify-content - main (vertical)
l align-items     - cross (horizontal)

Manipulating items through their parent containers
- configure the container, then the items
- nested <div> elements in flexbox group items, providing better control over layout and alignment

Flex: 0 1 auto
- flex-grow: 1;       # can grow if there’s more room
- flex-shrink: 1;     # can shrink if there’s less room
- flex-basis: 100px;  # the starting size of the item, but it's flexible!
Fixed - width: 100px; # no growing/shrinking allowed

Use "order" to customize the order of individual elements
Use "align-self" to vertically align individual items
# When a designer hands you a mockup to implement, your first task is to draw a bunch of boxes on it and determine how they’re supposed to stack, stretch, and shrink to achieve the desired design. Once you’ve got that done, it should be pretty easy to code

Align-content - unlocked on flex-wrap: wrap
- only works when items wrap to multiple lines
- aligns the entire group of flex lines on the cross axis

# Vocab
Arsenal: a collection of weapons and military equipment
