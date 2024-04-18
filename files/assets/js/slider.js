const carouselContainer = document.querySelector('.slides');
const carouselItems = document.querySelectorAll('.slide');
const carouselImage= document.querySelectorAll('.slide img');
const totalItems = carouselItems.length;
let currentIndex = 0;
const singleSlideWidth = document.querySelector(".slide").getBoundingClientRect().width;
const dotsContainer = document.querySelector('.dots');


let carouselContainerWidth = singleSlideWidth * totalItems;


carouselContainer.style.width = carouselContainerWidth + "px";
const singleSlideWidth2 = document.querySelector(".slide").getBoundingClientRect().width;
function showSlide(index) {
    if (index < 0) {
        index = totalItems-1;
    } else if (index >= totalItems) {
        index = 0;
    }
    const offset = -(index * ( carouselContainerWidth/totalItems));
    carouselContainer.style.transform = `translateX(${offset}px)`;
    currentIndex = index;
    updateDots();
}


function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function createDots() {
    for (let i = 0; i < totalItems; i++) {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => showSlide(i));
    }
    updateDots();
}


function updateDots() {
    const dots1 = document.querySelectorAll('.slider-dot');
    dots1.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
createDots();




