document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    const boton = document.createElement('button');
    boton.id = 'boton-saludo';
    boton.textContent = 'Saludar';
    boton.style.marginTop = '1rem';

    boton.addEventListener('click', () => {
        alert('¡Hola! Gracias por visitar nuestra Landing Page.');
    });

    header.appendChild(boton);
});
