const hamburger = document.getElementsByClassName('hamburger')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];

hamburger.addEventListener('click', () => {
    if(navLinks.getAttribute('id', 'hide')){
        navLinks.removeAttribute('id', 'hide')
    } else {
        navLinks.setAttribute('id', 'hide');
    }
    
} );



const quoteText = document.getElementsByClassName('quote-text')[0];
const quoteAuthor = document.getElementsByClassName('quote-author')[0];

fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        quoteText.innerText = 'Random quote: "' + data.content + '"';
        quoteAuthor.innerText = data.author;
    });