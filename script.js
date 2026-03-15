const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// NAVBAR: Menu deplegable de Caracteristicas
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownParent = document.querySelector('.has-dropdown');

dropdownToggle.addEventListener('click', () => {
    dropdownParent.classList.toggle('open');
});

//Cierra el menu desplegable al hacer clic fuera de el
document.addEventListener('click', (event) => {
    if (!dropdownParent.contains(event.target)) {
        dropdownParent.classList.remove('open');
    }
});

//HAMBURGUESA NAVR BAR PARA MOVIL
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
});

// CARACTERISTICAS
const featureBlocks = document.querySelectorAll('.feature-block');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        // El elemento entró al viewport: lo hacemos visible
        entry.target.classList.add('visible');
        // Dejamos de observarlo para que no se repita
        observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15   // Se activa cuando el 15% del elemento es visible
});

// Le decimos al observer que vigile cada bloque
featureBlocks.forEach(block => observer.observe(block));
