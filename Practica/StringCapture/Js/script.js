// Select DOM elements

const button = document.getElementById('btnProcesar');
const input = document.getElementById('InputText');
const exit = document.getElementById('resultado');

button.addEventListener('click', () => {
    let OriginalText = input.value;

    // Primero para Reemplazar las tildes usar 'Normalize' para separar la vocal
    // de la tilde y luego se elimina la tilde

    let CleanText = OriginalText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Para eliminar el @ usamos la expresion regular con "g" 

    CleanText = CleanText.replace(/@/g, "");

    // Imprime el resultado final en el <p> del HTML

    exit.textContent = CleanText;
})