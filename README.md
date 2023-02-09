# Game Space
(Developer: Jarrad Baker)

![Mockup image](docs/Responsive.png)

[Live webpage](https://jarradbaker.github.io/CI_PP2_GameSpace/)

## Table Of Contents

1. [Project Goals](#project-goals)
  1. [User Goals](#user-goals)
  2. [Website Owner Goals](#website-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requrements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colour)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks and Tools](#frameworks-and-tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Device testing](#performing-tests-on-various-devices)
    6. [Browser compatibility](#browser-compatability)
    7. [Testing user stories](#testing-user-stories)
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)

## Project Goals

### User Goals
- Play Naughts and Crosses
- Play a quiz game
- Save their hiscores
- Contact the website about fixes/improvements

### Website Owner Goals
- Reach the target audience
- Direct interaction with users
- Provide games for users

## User Experience

### Target Audience
The website is designed with the following target audience in mind:
- People looking to play a quiz game
- People looking to play Naughts and Crosses
- Peaople looking to play games

### User Requirements and Expectations
- Simplistic user interface
- Smooth Navigation System
- Easy to play the games
- All social links direct to the correct website
- Presentation of content is clear
- Accessibility
- Games work as expected

### User Stories

#### First Time User
1. As a first time user, I want to be able to play Naughts and Crosses
2. As a first time user, I want to be able to play a quiz
3. As a first time user, I want to contact the developer with feedback
4. As a first time user, I want to be able to save my hiscores
5. As a first time user, I want to be able to navigate the site easily

#### Returning User
6. As a returning user, I want to be able to contact the developer with suggested fixes and updates
7. As a returning user, I want to view my hiscores
8. As a returning user, I want to be able to play easily across my devices

#### Site Owner
9. As a site owner, I want users to be able to play the games
14. As a site owner, I want users to be able to save, and show their hiscores
15. As a site owner, I want users to be able to see a 404 page if anything goes wrong

## Design

### Design Choices
The website was designed to have a simplistic colour theme, which allows the text to be clear, and allow the user to focus more on the games. 

### Colour
As explained above, the colour theme was simplstic, and the font and game colours contrast well with the background colour. I chose a sandy yellow for the background colour, and a red font for headings, links and buttons, and a blue font for more standard text.

### Fonts
I chose the font "orbitron" from google fonts for my logo text, and text for any features, or interactables for the games. I chose this font, as it looks very "futuristic" and "cyber like". This ties in wel with the theme of the site. For standard text I chose the font "lucida sans", as it provides a nice contrast, and is clear.

### Structure
To make navigation as imple as possible, and looking appealing, I used a hamburger nav bar for the mobile view, and a standard styles nav bar for larger screens. I also decided to make the footer appear on mobile devices only when scrolling down, to give the user a better area for the games on smaller screens. The theme remains the same throughout all four pages:
- Index page: Contains the Quiz game, and all of it's different screen states.
- Tricks page: Contains the Naughts and Crosses game.
- Contact page: Gives users a chance to provide feedback through a contact form.

### Wireframes
<details><summary>Home</Summary>
<img src="docs/wireframes/index.png">  
</details>
<details><summary>Tricks</Summary>
<img src="docs/wireframes/tricks.png">  
</details>
<details><summary>Boards</Summary>
<img src="docs/wireframes/boards.png">  
</details>
<details><summary>Contact</Summary>
<img src="docs/wireframes/contact.png">  
</details>
<details><summary>404</Summary>
<img src="docs/wireframes/404.png">  
</details>

## Technologies Used

### Languages
The following languages were used to develop the website:
- HTML
- CSS
- Javascript

### Frameworks and Tools
The following frameworks and tools were used to develop the website:
- Git
- Github
- Gitpod
- Google Fonts
- Font Awesome
- Balsamiq
- Favicon.io
- Email.js
- Quotable.io (for the quotes in the footer)

## Features
The website contains 5 pages including the 404 page, and a total of 13 features

### Header (logo and navigation)
- Shows on every page
- The nav links stack under the logo on smaller screens making it responsive
- Enables easy and smooth navigation
- The current page is highlighted in blue
- User Stories: 8, 14
<details><summary>Header</Summary>
<img src="docs/features/Header.png">  
</details>

### Hamburger Menu
- Shows on every page
- The nav links stack under the logo on smaller screens making it responsive
- Enables easy and smooth navigation
- The current page is highlighted in blue
- User Stories: 8, 14
<details><summary>Header</Summary>
<img src="docs/features/Header.png">  
</details>

### Footer
- Shows on every page like the header
- Like the header, the social links also stack underneath the copyright text on smaller screens
- User Stories: 2, 8, 14
<details><summary>Footer</Summary>
<img src="docs/features/Footer.png">  
</details>

### Random Quote
- Shows on every page
- The nav links stack under the logo on smaller screens making it responsive
- Enables easy and smooth navigation
- The current page is highlighted in blue
- User Stories: 8, 14
<details><summary>Header</Summary>
<img src="docs/features/Header.png">  
</details>

### Quiz Game
- Part of the tricks page
- Has a video with controls explaining how to do the trick
- User Stories: 1, 4, 5, 10, 16
<details><summary>Trick Videos</Summary>
<img src="docs/features/TrickVideos.png">  
</details>

### Saving and Showing Hiscores
- Makes the website more appealing and professional looking
- Connects with the target audience
- User Stories: 14
<details><summary>Hero Image</Summary>
<img src="docs/features/HeroImage.png">  
</details>

### Naughts and Crosses Game
- Explains how the site differs from competitors
- Provides users more info about the products
- User Stories: 1, 7, 13
<details><summary>Why Choose Us</Summary>
<img src="docs/features/WhyChooseUs.png">  
</details>

### Contact form
- Allows users to contact the site owner/company
- Can be used to chase up an order
- Located on the contact page
- User Stories: 6, 9
<details><summary>Contact Form</Summary>
<img src="docs/features/ContactForm.png">  
</details>

### 404 page
- Redirects the user to a working page
- Explains what the issue is
- User Stories: 8, 15
<details><summary>404 Page</Summary>
<img src="docs/features/404page.png">  
</details>

## Validation

### HTML Validation

The Nu HTML Checker (W3C) is used to validate HTML documents. This ensures that all unintended mistakes are spotted before release, so that they can be corrected. All of my pages passed the check without any errors, including the 404 page.

index.html(quiz) - [results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjarradbaker.github.io%2FCI_PP2_GameSpace%2Findex.html) - No errors or warnings

game.html(Naughts and Crosses) - [results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjarradbaker.github.io%2FCI_PP2_GameSpace%2Fgame.html) - No errors or warnings

contact.html(Contact Form) - [results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjarradbaker.github.io%2FCI_PP2_GameSpace%2Fcontact.html) - No errors or warnings

404.html(404 page) - 

### CSS Validation

The W3C Jigsaw CSS Validation Service is used in exactly the same way as the Nu HTML Validator, but for CSS. I ran both my actual style.css file, and an actual web page through it, and both passed without any errors.

CSS [results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjarradbaker.github.io%2FCI_PP2_GameSpace%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) - No errors found
<!-- Finished here -->
### Accessibility

The WAVE web accessibility evaluation tool by WebAIM was used to ensure the webpages met accessibility standards. All 5 pages passed without any errors.

<details><summary>Home</Summary>
<img src="docs/Validation/Accessibility/index.png">
</details>

<details><summary>Tricks</Summary>
<img src="docs/Validation/Accessibility/tricks.PNG">
</details>

<details><summary>Boards</Summary>
<img src="docs/Validation/Accessibility/boards.PNG">
</details>

<details><summary>Contact</Summary>
<img src="docs/Validation/Accessibility/contact.PNG">
</details>

<details><summary>404</Summary>
<img src="docs/Validation/Accessibility/404.PNG">
</details>

### Performance

The Google Lighthouse tool, within the Google Chrome Developer Tools was used to ensure that each page met a high performance rating. This shows that the website will load efficiently over various devices.

<details><summary>Home</Summary>
<img src="docs/Validation/Performance/index.png">
</details>

<details><summary>Tricks</Summary>
<img src="docs/Validation/Performance/tricks.png">
</details>

<details><summary>Boards</Summary>
<img src="docs/Validation/Performance/boards.png">
</details>

<details><summary>Contact</Summary>
<img src="docs/Validation/Performance/contact.png">
</details>

<details><summary>404</Summary>
<img src="docs/Validation/Performance/404.png">
</details>

### Performance tests on various devices

Throughout development and testing, I used the following devices to ensure that the site was responsive, and worked as intended.

- Samsung Galaxy ZFold 2 (both ultra slim mode, and wide mode)
- Microsoft Surface Book 2 (Both as the laptop, and tablet)
- Macbook Pro
- Desktop PC with a 32" monitor

### Browser Compatibility

The website was tested on several web browsers to ensure consistency. The browsers used are as follows:

- Microsoft Edge
- Google Chrome
- Brave Browser (A Chrome based browser)
- Mozilla Firefox
- Opera GX

### Testing User Stories

1. As a first time user, I want to understand the product

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Tricks | Navigate to the Tricks page and find any Trick | See the tricks | Works as expected |
| Trick Videos | Navigate to the Tricks page and find any Trick Video | See the trick videos | Works as expected |
| Why Choose Us? | Navigate to the Home page and scoll down | See the Why Choose Us? section | Works as expected |
| Boards | Navigate to the Boards page | See the page containing all the products | Works as expected |
| Products | Navigate to the Boards page, and scroll down | See all of the products available | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Tricks</Summary>
    <img src="docs/Validation/UserStoryTests/TricksTest.png">
  </details>
  <details><summary>Tricks Videos</Summary>
    <img src="docs/Validation/UserStoryTests/TricksVideosTest.png">
  </details>
  <details><summary>Why Choose Us?</Summary>
    <img src="docs/Validation/UserStoryTests/WhyChooseUsTestStep1.png">
    <img src="docs/Validation/UserStoryTests/WhyChooseUsTestStep2.png">
  </details>
  <details><summary>Boards</Summary>
    <img src="docs/Validation/UserStoryTests/BoardsTest.png">
  </details>
  <details><summary>Products</Summary>
    <img src="docs/Validation/UserStoryTests/ProductsTest.png">
  </details>
</details>

2. As a first time user, I want to learn about the company

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer | Scroll down to the bottom of any page | See the social links | Works as expected |
| History | Navigate to the Home page and scroll down to the bottom | See the History of Skate Shack section | Works as expected |
| Google Map | Navigate to the Contact page | See the Google Map | Works as expected |
| Address | Navigate to the Contact page | See the Address above the Google Map | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Footer</Summary>
    <img src="docs/Validation/UserStoryTests/FooterTest.png">
  </details>
  <details><summary>History</Summary>
    <img src="docs/Validation/UserStoryTests/HistoryTestStep1.png">
    <img src="docs/Validation/UserStoryTests/HistoryTestStep2.png">
  </details>
  <details><summary>Google Map</Summary>
    <img src="docs/Validation/UserStoryTests/GoogleMapTest.png">
  </details>
  <details><summary>Address</Summary>
    <img src="docs/Validation/UserStoryTests/AddressTest.png">
  </details>
</details>

3. As a first time user, I want to know how much the product costs

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Boards | Navigate to the Boards page | See the page containing all the products | Works as expected |
| Products | Navigate to the Boards page, and scroll down | See all of the products available | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Boards</Summary>
    <img src="docs/Validation/UserStoryTests/BoardsTest.png">
  </details>
  <details><summary>Products</Summary>
    <img src="docs/Validation/UserStoryTests/ProductsTest.png">
  </details>
</details>

4. As a first time user, I want to learn more about skateboarding

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Tricks | Navigate to the Tricks page and find any Trick | See the tricks | Works as expected |
| Trick Videos | Navigate to the Tricks page and find any Trick Video | See the trick videos | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Tricks</Summary>
    <img src="docs/Validation/UserStoryTests/TricksTest.png">
  </details>
  <details><summary>Tricks Videos</Summary>
    <img src="docs/Validation/UserStoryTests/TricksVideosTest.png">
  </details>
</details>

5. As a first time user, I want to learn how to use the product

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Tricks | Navigate to the Tricks page and find any Trick | See the tricks | Works as expected |
| Trick Videos | Navigate to the Tricks page and find any Trick Video | See the trick videos | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Tricks</Summary>
    <img src="docs/Validation/UserStoryTests/TricksTest.png">
  </details>
  <details><summary>Tricks Videos</Summary>
    <img src="docs/Validation/UserStoryTests/TricksVideosTest.png">
  </details>
</details>

6. As a first time user, I want to ask questions about my order

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Contact form | Navigate to the Contact page | See the Contact form and be able to fill it in | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Contact Form</Summary>
    <img src="docs/Validation/UserStoryTests/ContactFormTest.png"> 
  </details>
</details>

7. As a first time user, I want to know why to choose this company

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Why Choose Us? | Navigate to the Home page and scoll down | See the Why Choose Us? section | Works as expected |
| History | Navigate to the Home page and scroll down to the bottom | See the History of Skate Shack section | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Why Choose Us?</Summary>
    <img src="docs/Validation/UserStoryTests/WhyChooseUsTestStep1.png">
    <img src="docs/Validation/UserStoryTests/WhyChooseUsTestStep2.png">
  </details>
  <details><summary>History</Summary>
    <img src="docs/Validation/UserStoryTests/HistoryTestStep1.png">
    <img src="docs/Validation/UserStoryTests/HistoryTestStep2.png">
  </details>
</details>

8. As a first time user, I want to be able to navigate the site easily

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Header | Scroll up to the top of any page | See the logo and nav bar | Works as expected |
| Footer | Scroll down to the bottom of any page | See the social links | Works as expected |
| 404 Page | If a link is broken, or the url is entered incorrectly | See the 404 Page | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Header</Summary>
    <img src="docs/Validation/UserStoryTests/HeaderTest.png">
  </details>
  <details><summary>Footer</Summary>
    <img src="docs/Validation/UserStoryTests/FooterTest.png">
  </details>
  <details><summary>404</Summary>
    <img src="docs/Validation/UserStoryTests/404Test.png">
  </details>
</details>

9. As a returning user, I want to be able to contact the company

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Contact form | Navigate to the Contact page | See the Contact form and be able to fill it in | Works as expected |
| Google Map | Navigate to the Contact page | See the Google Map | Works as expected |
| Address | Navigate to the Contact page | See the Address above the Google Map | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Contact Form</Summary>
    <img src="docs/Validation/UserStoryTests/ContactFormTest.png">
  </details>
  <details><summary>Google Map</Summary>
    <img src="docs/Validation/UserStoryTests/GoogleMapTest.png">
  </details>
  <details><summary>Address</Summary>
    <img src="docs/Validation/UserStoryTests/AddressTest.png">
  </details>
</details>

10. As a returning user, I want to learn more tricks

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Tricks | Navigate to the Tricks page and find any Trick | See the tricks | Works as expected |
| Trick Videos | Navigate to the Tricks page and find any Trick Video | See the trick videos | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Tricks</Summary>
    <img src="docs/Validation/UserStoryTests/TricksTest.png">
  </details>
  <details><summary>Tricks Videos</Summary>
    <img src="docs/Validation/UserStoryTests/TricksVideosTest.png">
  </details>
</details>

11. As a returning user, I want to learn where a physical store is

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Google Map | Navigate to the Contact page | See the Google Map | Works as expected |
| Address | Navigate to the Contact page | See the Address above the Google Map | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Google Map</Summary>
    <img src="docs/Validation/UserStoryTests/GoogleMapTest.png">
  </details>
  <details><summary>Address</Summary>
    <img src="docs/Validation/UserStoryTests/AddressTest.png">
  </details>
</details>

12. As a returning user, I want to look at products

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Boards | Navigate to the Boards page | See the page containing all the products | Works as expected |
| Products | Navigate to the Boards page, and scroll down | See all of the products available | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Boards</Summary>
    <img src="docs/Validation/UserStoryTests/BoardsTest.png">
  </details>
  <details><summary>Products</Summary>
    <img src="docs/Validation/UserStoryTests/ProductsTest.png">
  </details>
</details>

13. As a site owner, I want users to find out about our products

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Boards | Navigate to the Boards page | See the page containing all the products | Works as expected |
| Products | Navigate to the Boards page, and scroll down | See all of the products available | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Boards</Summary>
    <img src="docs/Validation/UserStoryTests/BoardsTest.png">
  </details>
  <details><summary>Products</Summary>
    <img src="docs/Validation/UserStoryTests/ProductsTest.png">
  </details>
</details>

14. As a site owner, I want users to have a good visual experience when using the website

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Header | Scroll up to the top of any page | See the logo and nav bar | Works as expected |
| Footer | Scroll down to the bottom of any page | See the social links | Works as expected |
| Hero Image | Navigate to the top of the Home page | See the Hero Image and cover text | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Header</Summary>
    <img src="docs/Validation/UserStoryTests/HeaderTest.png">
  </details>
  <details><summary>Footer</Summary>
    <img src="docs/Validation/UserStoryTests/FooterTest.png">
  </details>
  <details><summary>Hero Image</Summary>
    <img src="docs/Validation/UserStoryTests/HeroImageTest.png">
  </details>
</details>

15. As a site owner, I want users to be able to see a 404 page if anything goes wrong

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| 404 Page | If a link is broken, or the url is entered incorrectly | See the 404 Page | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>404</Summary>
    <img src="docs/Validation/UserStoryTests/404Test.png">
  </details>
</details>

16. As a site owner, I want to enrich our users' skateboarding experience

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Tricks | Navigate to the Tricks page and find any Trick | See the tricks | Works as expected |
| Trick Videos | Navigate to the Tricks page and find any Trick Video | See the trick videos | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Tricks</Summary>
    <img src="docs/Validation/UserStoryTests/TricksTest.png">
  </details>
  <details><summary>Tricks Videos</Summary>
    <img src="docs/Validation/UserStoryTests/TricksVideosTest.png">
  </details>
</details>

## Bugs

| **Bug** | **Fix** |
|---------|---------|
| Height for most sections wasn't big enough | Removed the max-height value so the height would be as big as the actual content |
| Grid items and Borders not fitting sizing | Added box-sixing: border-box and everything looked as it should |
| Padding issue on tricks page for small mobile phone screens | Removed the padding for smaller screen sizes |
| Social links not directing properly and not opening in a new tab | Corrected all links with http/https, and made them open in new tabs |

## Deployment

The website was deployed through the use of GitHub Pages, a feature built in to GitHub. This can be done by following the steps below.
1. In the desired repository, click on "Settings" from the top menu.
2. From the side menu to your left, select "Pages" in the "Code and automation" section.
3. Make sure the "Source" option is set to "Deploy from a branch"
4. Select the desired "Branch" from the drop down below (main branch in most cases, making sure the director is set to /(root)).
5. Select "Save", and after it refreshes the page, you will see a box at the top of the page providing you with the URL of your now published site.

You can fork my, or any other repository by doing the following.
1. Go to the desired repository
2. Click "Fork" in the upper right corner
3. Select the owner, and set the repository name. A description can be added if desired
4. Choose whether to copy the default branch, or all branches
5. Click "Create Form"

You can clone a repository by following the steps below.
1. Go to the desired repository
2. Click the "Code" button at the top of the files section of the page
3. Select your desired method for cloning (HTTPS/SSH/GitHub CLI)
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory
6. Type "git clone", and then paste the URL you copied earlier. It will look like this, with your GitHub username instead of "YOUR-USERNAME": "$ git clone https://github.com/YOUR-USERNAME/DESIRED-REPOSITORY"
7. Press Enter. Your local clone will be created.

## Credits

### Media

#### Videos

- "How to Ollie in under 4 minutes" Video was taken from Youtube, from the creator "CCS"
- "How to Shuvit & Pop Shuvit | In-Depth Trick Tip | Tactics" Video was taken from Youtube, from the creator "Tactics Boardshop"
- "HOW TO FS 180" Video was taken from Youtube, from the creator "Jonny Giger"
- "How to Kickflip in 5 minutes" Video was taken from Youtube, from the creator "CCS"
- "How to Heelflip" Video was taken from Youtube, from the creator "Jonny Giger"

#### Images

- "main-hero-image-new.jpg" by "Salvio Bhering" on Pexels
- "404.jpg" by "Erik McLean" on Pexels
- "board1.jpg" from "Vol.1 Checker Skateboard Deck (black and white)" on SkatePro.uk
- "board2.jpg" from "Vol.1 Checker Skateboard Deck (purple and black)" on SkatePro.uk
- "board3.jpg" from "Vol.1 Tie-Dye Skateboard Deck" on SkatePro.uk
- "board4.jpg" from "Blue Baker Signature Deck" on SkatePro.uk
- "board5.jpg" from "Red Baker Signature Deck" on SkatePro.uk
- "board6.jpg" from "Green Baker Signature Deck" on SkatePro.uk

### Code

- HTML: For the interactive google map was taken from google maps.
- HTML: "i" tags with the icons and the social media link icons were all imported from FontAwesome.
- CSS: The font "Quicksand" was imported from Google Fonts.
- HTML: The embedded youtube videos' code was edited to fit my site, but originally from Youtube.

## Acknowledgements

I would like to take this opportunity to acknowledge and thank the following people:
- My mentor Mo Shami for continuous guidance and support.
- My mother, who always encouraged me to strive for a career that I enjoy.
- My peers on the Code Institute Slack channels, for advice and feedback.
- My partener Kirsty, for her belief in me, supporting me, encouraging me, and giving me the invaluable time needed to develop my skills
