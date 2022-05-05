
// Header Background Change On Scroll

let header =document.querySelector('header');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('header-active', window.scrollY>0);
});

// Scroll Active

let scroll = document.querySelector('.scroll-top');

window.addEventListener('scroll', ()=>{
    scroll.classList.toggle('scroll-active', window.scrollY>0);
});