/* 
window.sr = ScrollReveal ({ reset: true});

sr.reveal ('.banner-text img', { duration: 2000});

sr.reveal ('.banner-text h3',{ rotate: {x: 70, y:0, z: 0}, duration: 3000});

sr.reveal ('.banner-text h3 span', {rotate: {x: 0, y:80, z: 0}, duration: 4000});

sr.reveal ('.banner-text p', { duration: 5000});
 */
/* ---- alternar ícone da barra de navegação */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// Deixa link na nav bar ativado com a cor 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);

    /* remove toggle icon and navbar when click navbar Link (scroll)*/
    /* remova o lista de alternância e a barra de navegação ao clicar no link da barra de navegação (rolagem) */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/* ================== scroll reveal ==================*/
//efeito de aparecer nos títulos das sections.
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin:
        'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* ================== Typed JS ==================*/
const typed = new Typed('.muda-text', {
    strings: ['Irrigação', 'Gerenciamento', 'Economia'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 4000,
    loop: true
});