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
setInterval(showNextImage, 5000); // Cambia cada 3 segundos

// Mostrar/Ocultar formulario de inicio de sesión
function toggleLoginForm() {
    const loginForm = document.getElementById("loginForm");
    loginForm.style.display = loginForm.style.display === "block" ? "none" : "block";
}

// Cambiar a formulario de registro
function toggleRegisterForm() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    loginForm.style.display = "none";
    registerForm.style.display = "block";
}

// Manejar inicio de sesión
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Verificar credenciales (esto es solo un ejemplo)
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        alert("¡Inicio de sesión exitoso!");
        toggleLoginForm();
    } else {
        alert("Credenciales incorrectas. Intente de nuevo.");
    }
}

// Manejar registro
function handleRegister(event) {
    event.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    // Guardar los datos de registro en localStorage (solo para ejemplo)
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("¡Registro exitoso!");

    // Volver al formulario de inicio de sesión
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}
