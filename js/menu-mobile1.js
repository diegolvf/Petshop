const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');
const span1 = document.getElementById('span-1');
const span2 = document.getElementById('span-2');
const span3 = document.getElementById('span-3');

menuToggle.addEventListener('click', function(){
    header.classList.toggle('active');
    nav.classList.toggle('active');

    // Animação para os 3 spans do botão do menu-mobile

    if (nav.classList.contains('active')) {
        span1.style.transformOrigin = '0% 0%';
        span1.style.transform = 'rotate(45deg) scaleX(1.10)';
        span2.style.opacity = '0';
        span3.style.transformOrigin = '0% 100%';
        span3.style.transform = 'rotate(-45deg) scaleX(1.10)';
    } else {
        span1.style.transform = ''; //remove a transformação do menu em X ao clicar no li na lista.
        span2.style.opacity = '';   //remove a transformação do menu em X ao clicar no li na lista.
        span3.style.transform = ''; //remove a transformação do menu em X ao clicar no li na lista.
    }
});

window.addEventListener('resize', function(){
    if (window.innerWidth > 767) {
        header.classList.remove('active');
        nav.classList.remove('active');
    }
});

 