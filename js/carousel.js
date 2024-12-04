const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prev_btn');
const nextButton = document.getElementById('next_btn');
const images = document.querySelectorAll('.carousel img');

let currentIndex = 0;

nextButton.addEventListener('click',() =>{
    if(currentIndex <images.length-1){
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click',() =>{
    if(currentIndex > 0){
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = -currentIndex *100;
    carousel.style.transform=`translateX(${offset}%)`;
}
