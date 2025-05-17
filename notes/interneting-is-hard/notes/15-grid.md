# ![](https://raw.githubusercontent.com/eludadev/css-docs/main/assets/css_grid.png)
https://grid.malven.co

https://cssgridgarden.com
https://www.euismod.dev/#/learn

https://learncssgrid.com/#grid-container
https://www.joshwcomeau.com/css/interactive-guide-to-grid/
# https://www.coltsteele.com/tutorials/mastering-css-grid

https://youtu.be/xI9G0Zh5DVA?si=fY09RWhmlsdZH4TK
https://youtu.be/EiNiSFIPIQE?si=jVRYOQe8o_Nayht6

# ------------------------------------------------------------------------------
Grid Container Setup
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  # width
  grid-template-rows: auto 300px auto; # height
  grid-gap: 10px;
}

Grid Placement Properties
.item {
  grid-column: 1/2; # start/end
  grid-row: 1/2;
  # grid-column: span 2;

  Use grid-area with grid-template-areas and named regions
  # grid-area: 2/1/4/3; # row-start/col-start/row-end/col-end
}

Responsive Grid - that adjusts based on available space - no media queries needed!
- grid-template-columns/rows: repeat(auto-fit/fill, minmax(250px, 1fr));
Creates exactly 3 equal columns or rows
- grid-template-columns/rows: repeat(3, 1fr);

Grid Template Areas
.container {
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}
.header { grid-area: header; }

Grid Alignment
- justify-items: center; # horizontal alignment of items
  align-items: center;   # vertical alignment of items
  justify-content: space-between; # alignment of entire grid
  align-content: start;  # alignment of entire grid

Implicit Grid - auto-placement behavior
- grid-auto-rows: minmax(100px, auto);
  grid-auto-columns: minmax(100px, auto);
  grid-auto-flow: dense; # controls auto-placement algorithm

Terms:
Explicit - clearly and directly defined sizes by you (e.g., width, height)
Implicit - sizes determined by the browser based on content or context
