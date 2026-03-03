// Seleccionamos el formulario usando su etiqueta
const form = document.querySelector('form');

// Escuchamos cuando el usuario hace clic en el botón de Login
form.addEventListener('submit', function (event) {
    // Evitamos que la página se recargue y trate de ir a "/login"
    event.preventDefault();

    // Obtenemos los valores que el usuario escribió
    const user = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificamos si los datos son correctos
    if (user === "estudiante@ejemplo.com" && password === "12345678") {
        alert("Bienvenidos");
    } else {
        alert("Usuario y/o Password incorrectos");
    }
});