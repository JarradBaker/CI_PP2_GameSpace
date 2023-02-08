const hamburger = document.getElementsByClassName('hamburger')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];

const quoteText = document.getElementsByClassName('quote-text')[0];
const quoteAuthor = document.getElementsByClassName('quote-author')[0];

/**
 * Event listener to toggle the hamburger menu and nav links
 */
hamburger.addEventListener('click', () => {
    if(navLinks.getAttribute('id', 'hide')){
        navLinks.removeAttribute('id', 'hide');
    } else {
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