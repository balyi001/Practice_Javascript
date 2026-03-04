// Referencias a los elementos del DOM
const inputColor = document.getElementById('fColor');
const btnSend = document.getElementById('btnSend');
const body = document.body;

// Función para aplicar el color y guardar en localStorage
btnSend.addEventListener('click', () => {
    const chosenColor = inputColor.value;
    
    if (chosenColor) {
        body.style.backgroundColor = chosenColor
        localStorage.setItem('userFavoriteColor', chosenColor);
    } else {
        alert("Por favor, ingresa un color (ej: 'red', '#445566' o 'blue')");
    }
});

// Lógica para mantener el color después de recargar
window.onload = () => {
    const savedColor = localStorage.getItem('userFavoriteColor');
    
    if (savedColor) {
        body.style.backgroundColor = savedColor;
        inputColor.value = savedColor;
    }
};