#
https://gist.github.com/bartholomej/8415655
https://imdac.github.io/modules/css/css-rwd-patterns/

Desktop-first # then adjust krte rho for small screens
# - easier to design complex layouts first and simplify them later
@media (max-width: 500px) {} # max 500px hona chaiye
- applies to screens 500px or smaller (tablets, phones)
- starts with large screens and adjusts styles for smaller ones

body {
  font-size: 16px;
  padding: 20px;
}
@media (max-width: 768px) { # adjustments for smaller screens
  body {
    font-size: 14px;
    padding: 10px;
  }
}

Mobile-first # then adjust krte rho for big screens
@media (min-width: 500px) {} # min should be 500px
- applies to screens 500px or larger (desktops, laptops)
- starts with small screens and adjusts styles for larger ones

:root {
  # --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-xxl: 1440px;
}
