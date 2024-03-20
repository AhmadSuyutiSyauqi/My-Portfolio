const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
   hamburger.classList.toggle('text-secondary') 
   navMenu.classList.toggle('hidden')
})