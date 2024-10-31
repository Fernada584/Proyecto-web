function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Carrusel automático
const carouselImages = document.querySelectorAll("#carousel img");
let currentImageIndex = 0;

function showNextImage() {
    carouselImages[currentImageIndex].style.display = "none";
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    carouselImages[currentImageIndex].style.display = "block";
}

// Mostrar la primera imagen y comenzar el carrusel
carouselImages.forEach((img, index) => img.style.display = index === 0 ? "block" : "none");
setInterval(showNextImage, 3000); // Cambia cada 3 segundos
