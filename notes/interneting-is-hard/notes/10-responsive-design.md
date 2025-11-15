https://gist.github.com/bartholomej/8415655
https://imdac.github.io/modules/css/css-rwd-patterns/

- Easier to design complex layouts first and simplify them later
Desktop-first then adjust for small screens
@media (max-width: 640px) {} # max must be 640px 👇
- Applies to screens 640px or smaller (tablets, phones)
- Starts with large screens and adjusts styles for smaller ones

body {
  font-size: 16px;
  padding: 20px;
}
@media (max-width: 640) { # adjustments for smaller screens
  body {
    font-size: 14px;
    padding: 10px;
  }
}

Mobile-first then adjust for big screens
@media (min-width: 640px) {} # min should be 640px 👆
- Applies to screens 640px or larger (desktops, laptops)
- Starts with small screens and adjusts styles for larger ones
