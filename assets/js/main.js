// Declaring the constants for the hamburger menu and the nav
// links within it
const hamburger = document.getElementsByClassName('hamburger')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];

// Declaring the containers for the quote API's text, and 
// the quote's author
const quoteText = document.getElementsByClassName('quote-text')[0];
const quoteAuthor = document.getElementsByClassName('quote-author')[0];

/**
 * Event listener to toggle the hamburger menu and nav links
 */
hamburger.addEventListener('click', () => {
    // If the nav links are hidden, show them
    if(navLinks.getAttribute('id', 'hide')){
        navLinks.removeAttribute('id', 'hide')
    } else {
        // Hide nav links
        navLinks.setAttribute('id', 'hide');
    } 
} );

/**
 * Fetch to grab a random quote from the quotable api
 */
fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        quoteText.innerText = 'Random quote: "' + data.content + '"';
        quoteAuthor.innerText = data.author;
    });