#
To render correctly on a retina device, an image needs to be twice as big as its final display dimensions

Fluid layouts that adjust and resize based on the viewport or container size
Setting width: 100% allows the element to fill its container, with the height adjusting to maintain its aspect ratio
Image dimensions are part of the content, so they should be specified in HTML, not CSS

Responsive Image Optimization - mainly for small screens, as large screens typically show the best image

Screen Width Optimization Using srcset
- retina smartphones download high-res images due to their pixel density, even when standard images would suffice
- hey! We can serve standard-resolution photo to retina smartphones!
- the lesson here is that we want to optimize larger images based on their final rendered dimensions, not just the device’s screen resolution

- it's important to consider both screen size and resolution
- if we only focus on screen size, we might send large images to small screens, slowing down the website
- if we focus only on resolution, we might give low-quality images to large screens, making them appear blurry
- by considering both, we ensure responsive images that look good and load fast on any device, from phones to 4k monitors

For srcset to work, multiple image versions must be provided on the server
The browser automatically detects the device's resolution and chooses the correct image accordingly
- the srcset attribute lets the browser select the best image based on the device's resolution
- it uses higher-resolution images (like 2x or 3x) on high pixel density devices, such as Retina displays

But what about smaller screens with high resolutions, Retina display
# - to solve this, you send higher-resolution images (typically 2x or 3x) for clarity

The 1x and 2x approach may deliver high-resolution images to small screens, which is inefficient
Better approach than 2x, 3x
- src="image-800.jpg"
- srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
- sizes="(max-width: 800px) 400px, (max-width: 1000px) 800px, 1200px"
- (max-width: 800px) 400px, # screens below the 800px will use 400px image
- (max-width: 1000px) 800px, 1200px # screens below and above the 1000px

# Use "vw" when you want the image to be fully responsive and fit the screen dynamically
# Use "px" for fixed width

# Vocab
Intrinsic: belonging naturally; essential
