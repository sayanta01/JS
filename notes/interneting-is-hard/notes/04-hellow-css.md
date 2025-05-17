#
󱡉 Cascade 👇
Each step's styles override the previous ones, but more specific styles override less specific ones

# https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel

Units of Measurement
Absolute - px
Relative
- rem relative to the root element's font size (usually the <html> tag). if the root = 16px, then 1rem = 16px
- em  relative to the element's font size. if the parent = 20px, then 1em = 20px
- %   relative to parent element's font size
- vw  based on the width of the viewport (the visible area of the screen), 1vw = 1% of the viewport width - vh

.btn {
  font-size: 1rem;
  padding: 1em; # use em after rem
}

# Vocab
Infer: conclude
Perils: serious and immediate danger
