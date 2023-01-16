// Define the image

const images = [
    "img/car-1.jpg",
    "img/car-2.jpg",
    "img/car-3.jpg",
    "img/car-4.jpg",
];

// App state

let index = 0;
const max = images.length;

// Get DOM

const containerElement = document.querySelector(".container");
const prevSlideButton = document.querySelector(".prevSlide");
const nextSlideButton = document.querySelector(".nextSlide");

// Listen for arrow click

prevSlideButton.addEventListener("click", function () {
    index--;
    setImageIndex();
    ChangeBackgroundImage(images[index], containerElement);
});

nextSlideButton.addEventListener("click", function () {
    index++;
    setImageIndex();
    ChangeBackgroundImage(images[index], containerElement);
});

// Utility function

function setImageIndex() {
    if (index < 0) index = max - 1;
    if (index == max) index = 0;
}

function ChangeBackgroundImage(backgroundImage, e) {
    e.style.backgroundImage = `url(${backgroundImage})`;
}
