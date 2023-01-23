const hamburger = document.getElementsByClassName('hamburger')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];

hamburger.addEventListener('click', () => {
    if(navLinks.getAttribute('id', 'hide')){
        navLinks.removeAttribute('id', 'hide')
    } else {
        navLinks.setAttribute('id', 'hide');
    }
    
} );