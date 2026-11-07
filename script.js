const welcomeText = document.getElementById("welcomeText");
const welcomeBtn = document.getElementById("welcomeBtn");
const restoreBtn = document.getElementById("restoreBtn");

welcomeBtn.addEventListener("click", function() {
    welcomeText.textContent = "Привіт! JavaScript успішно змінив текст сторінки!";
});

restoreBtn.addEventListener("click", function() {
    welcomeText.textContent = "Вітаємо, гостю!";
});

const mainTitle = document.getElementById("mainTitle");
const body = document.body;
let isTitleColored = false;

document.getElementById("lightBtn").addEventListener("click", function() {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
});

document.getElementById("darkBtn").addEventListener("click", function() {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
});

document.getElementById("colorTitleBtn").addEventListener("click", function() {
    if (isTitleColored) {
        mainTitle.style.color = ""; 
    } else {
        mainTitle.style.color = "#ffb74d"; 
    }
    isTitleColored = !isTitleColored;
});

document.getElementById("customClassBtn").addEventListener("click", function() {
    body.classList.toggle("custom-theme"); 
});

let counter = 0;
const counterValue = document.getElementById("counterValue");

function updateCounterColor() {
    if (counter > 0) {
        counterValue.style.color = "green";
    } else if (counter < 0) {
        counterValue.style.color = "red";
    } else {
        counterValue.style.color = "black"; 
    }
}

document.getElementById("plusBtn").addEventListener("click", function() {
    counter++;
    counterValue.textContent = counter;
    updateCounterColor();
});

document.getElementById("minusBtn").addEventListener("click", function() {
    counter--;
    counterValue.textContent = counter;
    updateCounterColor();
});

document.getElementById("resetBtn").addEventListener("click", function() {
    counter = 0;
    counterValue.textContent = counter;
    updateCounterColor();
});

const productImage = document.getElementById("productImage");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const description = document.getElementById("description");

let isHeadphones = true;

document.getElementById("changeProductBtn").addEventListener("click", function() {
    if (isHeadphones) {
        productImage.src = "images/iphone.jpg";
        productName.textContent = "iPhone 18 Pro";
        productPrice.textContent = "157999 грн";
        description.textContent = "Apple iPhone 18 Pro 2TB Burgundy";
    } else {
        productImage.src = "images/headphones.jpg";
        productName.textContent = "Apple AirPods Max";
        productPrice.textContent = "29999 грн";
        description.textContent = "Навушники повнорозмірні бездротові Apple AirPods Max Midnight (MWW43ZE/A)";
    }
    isHeadphones = !isHeadphones;
});

document.getElementById("toggleDescBtn").addEventListener("click", function() {
    description.classList.toggle("d-none");
});

document.getElementById("changePriceBtn").addEventListener("click", function() {
    productPrice.textContent = "3999 грн (Знижка!)";
});

const images = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg"
];

let currentIndex = 0;

const galleryImage = document.getElementById("galleryImage");
const galleryTitle = document.getElementById("galleryTitle");
const galleryCounter = document.getElementById("galleryCounter");

function updateGallery() {
    galleryImage.src = images[currentIndex];
    galleryTitle.textContent = "Фотографія " + (currentIndex + 1);
    galleryCounter.textContent = (currentIndex + 1) + " / " + images.length;
}

document.getElementById("nextBtn").addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateGallery();
});

document.getElementById("prevBtn").addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateGallery();
});

document.getElementById("toggleSizeBtn").addEventListener("click", function() {
    galleryImage.classList.toggle("img-thumbnail"); 
    if (galleryImage.style.maxHeight === "400px") {
        galleryImage.style.maxHeight = "200px";
    } else {
        galleryImage.style.maxHeight = "400px";
    }
});