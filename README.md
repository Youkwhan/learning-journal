# learning-journal
A learning journal (or blog)

## Demo link:
Access my site at [https://youk-blog.netlify.app](https://youk-blog.netlify.app)

## Table of Content:

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)
- [Credits](#credits)
- [License](#license)
- [Connect](#connect)

## Overview
This is my solo project that practices responsive design, which was inspired by Scrimba.

The requirements of the project include:
- Follow the design specifications (as indicated in the [Figma file](https://www.figma.com/file/lXVKwGtzfhsR9tZd4RrPuH/Learning-Journal%2FBlog-(Copy)?node-id=0-1&t=VE34U1UupuqFPBUo-0).
- Build each page from "scratch".
- Make all pages responsive (i.e., relative units, mobile-first design, media queries, etc.)

## Screenshots

#### Desktop
![desktop-capture](screencapture-youk-blog-netlify-app-2023-04-13-16_13_30.png)

#### Mobile
![mobile-capture](screencapture-youk-blog-netlify-app-2023-04-13-16_15_17.png)

## Technologies
- HTML
- CSS
- JavaScript
- Figma

## Setup
- download or clone the repository
- visit the site [Demo link](#demo-link)

## Approach
I first set up the general layout of my html and general css styling by adopted the `BEM` naming style for my css class names to keep a block structure similar to html.
I also created custom css variables to keep refactoring units easier for the future, and practiced the power of grid. 

Taking a mobile-first approach I started with designing the mobile versions of this website. This approach takes advantage of the built-in responsiveness of HTML and a few lines of CSS to create mobile-friendly websites. 

Once the mobile versions of the site were set, I moved on to designing the desktop versions. With the mobil-first approach this equates to adding a few lines of CSS within a media query to adject the properties for fonts, margins, and padding to make it more desktop-friendly.

The last part of my process is to work with the Javascript. In this project, I used Javascript to render the grid of `.posts-items` and to make use of the "View more" button on the home page. There is yet to be any content data wise, but in the future i would get the data for the blog posts is stored with and store it within an array of objects. I would use the `.forEach()` built-in method to grab the data and manipulate it for rendering onto the DOM using `.innerHTML`.

## Status
This blog site is still in progress. `Version 2` will be out soon. Which will contain my own custom images, and content about my learning expierence for others to read and resonate with.

## Credits
List of contriubutors:
- [Scrimba](https://scrimba.com/learn/frontend)
- [Beginners guide to BEM](https://medium.com/js-dojo/a-beginners-guide-to-bem-ba76a36c5880)
- [Blog Article about CSS](https://ananfito.hashnode.dev/responsive-web-design-with-3-lines-of-css)

## License

MIT license @ Youkwhan

## Connect

Thank you for reading about this project. If you'd like to connect with me for mentoring, collaboration, or employment opportunities, you can do so via the following links:

- Email [Youkwhan@gmail.com](**Youkwhan@gmail.com**)
- LinkedIn [https://www.linkedin.com/in/youkwhan/](https://www.linkedin.com/in/youkwhan/)
- Portfolio [https://devyouk.netlify.app](https://devyouk.netlify.app)
