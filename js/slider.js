const sliderContainer = document.querySelector('.slider-container');
const slideImages = document.querySelectorAll('.slider-item');

let currentIndex = 0;

function slider() {
    currentIndex++;

    if (currentIndex >= slideImages.length) {
        currentIndex = 0;
    }

    sliderContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
}

setInterval(slider, 3000);