# Milestone project two - Isle of Man tourist information website 
The Isle of Man is often considered the motorcycling capital of the world with the annual Tourist Trophy (TT) races drawing thousands of tourists to the island. With COVID halting tourism globally, this has already lead to the postponement of the 2020 TT and could eventually lead to the full cancellation of the TT races full stop! This would damage tourism on the island so the island needs to find ways to boost tourism and draw interest in the island.

The website aims to provide summary information to potential tourists before they visit the island. The information is provide in summary form as people do not want to trawl through pages and pages of information. This can be quite off putting. 

[Click here to view the live website](https://howler118.github.io/milestone-project-two/)

# User Experience
## User stories
#### External Users 

- Potential tourists visiting the island
- People looking to move to the island

#### External User Goals

- Tourists
    - As a tourist, I want to know the best places to visit
    - As a tourist, I want to be able to find my way round the island
    - As a tourist, I want to know the important information about the island

- People moving to the island
    - As someone potentially moving to the island,  I want to know any restrictions on moving to the island
    - As someone potentially moving to the island, I want to know the important information about the island

#### Site Owner Goals

- As the site owner I want to help attract more visitors to island

# Design

Colour Scheme

- The main colours used for website was red (#b01200) and white. This was because Manx flag is mainly red and white text stands out well on the slightly dark red background.

Typography

- For the heading at the top of the page I used Permanent Marker. I used it as it is informal but striking. For the other headings and text I used Roboto. I liked the look of it so thought I would use it throughout the website.

Imagery

- The images used were vital to the UX as they tell the user what the website was about without having to read through. As the website is focused on the Isle of Man I made sure to use plenty of images of the island. I could describe the island in great detail but pictures are much more powerful. I used one of my own pictures in the welcome section as I always believe the first thing a user should come across on a website is a striking picture to grab their attention. I used my own images for the background of the other sections just to make the sections stand out.

 Wireframes

 - The Wireframes for the website are available to view in the repository

### Existing Features
- Flip cards in the basic info section to give users bitsize information about the island
- Form on the contact us page which allows users to submit feedback on the website
- The website is responsive and works on all devices
- Google Maps API with markers to show the top things to do and see on the island
- Links for all the websites or Facebook pages of the top things to do/see on the island

### Features left to implement

- A picture slideshow which automatically cycles through pictures of the island

# Technologies Used

### Languages Used

- HTML5
- CSS3
- Javascript
- JQuery

### Frameworks, Libraries and Programs Used

- Google Fonts:

Google fonts were used on all pages on my website. I imported two fonts "Permanent Marker" which was used website heading and "Roboto" which was used for paragraphs and all the other headings.

- Font Awesome:

Font awesome was used throughout my website to add icons to various headings to make them stand out more and look different from one and other.

- Git

Git was used for version control (using the Gitpod terminal)

- Github

Github was used to store the project

- Balsamiq

Was used to create my wireframes for the project

# Testing

## Code Validation

Initially I wanted to make sure that all syntax used was valid on my website so used the [W3C Markup Validator](https://validator.w3.org/#validate_by_input), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) and [JSHintW3C Markup Validator](https://jshint.com/) respectively.

#### Upon checking my JS file there were no errors

#### Upon checking my CSS file there were one error:

1) 563 Parse Error [,]

To clear this error I just removed the extra comma after the last targeted element.

#### Upon checking index.html there were three errors:

1) The center element is obsolete. Use CSS instead. From line 266, column 25; to line 266, column 32
2) The center element is obsolete. Use CSS instead. From line 289, column 25; to line 289, column 32
3) The center element is obsolete. Use CSS instead. From line 313, column 25; to line 313, column 32

To clear the errors, I removed the "center" tag from my html file and replaced it with a normal div. In my CSS file I targeted this new div and positioned it centrally within its container.

#### Upon checking camping.html got four errors:

1) Element br not allowed as child of element ul in this context. (Suppressing further errors from this subtree.) From line 81, column 21; to line 81, column 24
2) Element p not allowed as child of element ul in this context. (Suppressing further errors from this subtree.) From line 82, column 21; to line 82, column 23
3) Error: Attribute alt not allowed on element a at this point. From line 160, column 21; to line 160, column 198
4) Element h2 not allowed as child of element ul in this context. (Suppressing further errors from this subtree.) From line 180, column 17; to line 180, column 20

Error 1 was caused by a line break tag being inside an an unordered list. I moved the line break tag below the unordered list which cleared the error and had no impact on page.

Error 2 was caused by a paragraph tag being inside an an unordered list. I moved the paragraph tag below the unordered list which cleared the error and had no impact on page.

Error 3 was caused by adding an alt attribute to an anchor tag which isn't required in the club shop banner section. I removed this tag which cleared the error.

Error 4 I had difficulty clearing. If I removed the h2 element it created alignment issues with the text and social media icons. To solve the alignment issues I created a new div that would contain the h2 and this helped align the h2 with the social media links

Upon checking contact.html got two errors:

1) Error: Attribute alt not allowed on element a at this point. From line 151, column 21; to line 151, column 198
2) Element h2 not allowed as child of element ul in this context. (Suppressing further errors from this subtree.) From line 171, column 17; to line 171, column 20

Error 1 was caused by adding an alt attribute to an anchor tag which isn't required in the club shop banner section. I removed this tag which cleared the error.

Error 2 I had difficulty clearing. If I removed the h2 element it created alignment issues with the text and social media icons. To solve the alignment issues I created a new div that would contain the h2 and this helped align the h2 with the social media links
