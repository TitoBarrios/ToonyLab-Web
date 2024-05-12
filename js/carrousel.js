let list = document.getElementById("carrousel-list");
let items = document.querySelectorAll("#carrousel #carrousel-list .carrousel-item");
let dots = document.querySelectorAll("#carrousel #carrousel-dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length - 1;

prev.onclick = function () {
    if (active != 0) {
        active -= 1;
    } else {
        active = lengthItems;
    }
    reloadSlider();
}

let interval = 5000;
let refreshSlider = setInterval(() => { next.click() }, interval);

next.onclick = function () {
    if (active != lengthItems) {
        active += 1;
    } else {
        active = 0;
    }
    reloadSlider();
}

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + "px";

    let lastActiveDot = document.querySelector("#carrousel #carrousel-dots .active");
    lastActiveDot.classList.remove("active");
    dots[active].classList.add("active");
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => { next.click() }, interval);
}

dots.forEach((li, key) => {
    li.addEventListener("click", function () {
        active = key;
        reloadSlider();
    })
})

let container = document.getElementById('carrousel-list');
let images = document.querySelectorAll('.carrousel-item img');

window.addEventListener("load", function() {
    resizeImages()
});
window.addEventListener("resize", function() {
    resizeImages()
});

function resizeImages() {
    let containerWidth = container.offsetWidth;
    images.forEach(function (image) {
        image.style.width = containerWidth + 'px';
    });
}
