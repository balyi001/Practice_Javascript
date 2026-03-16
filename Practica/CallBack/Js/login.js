// Usuarios para la prueba
const baseDeDatos = [
    { user: "admin", pass: "1234" },
    { user: "profesor", pass: "web2024" }
];

// El callback maneja la parte visual y la alerta
function mostrarResultado(mensaje, esValido) {
    const contenedor = document.querySelector('#mensajeError');
    contenedor.textContent = mensaje;

    // Si es valido verde, si no rojo
    contenedor.style.color = esValido ? "green" : "red";

    // Alerta con el mensaje correspondiente
    alert(mensaje);
}

// Función que valida los datos
function validarCredenciales(usuarioIn, claveIn, callback) {
    const coincidencia = baseDeDatos.find(u => u.user === usuarioIn && u.pass === claveIn);

    if (coincidencia) {
        // Si existe, mandamos el mensaje de éxito y el true
        callback("Bienvenido al sistema", true);
    } else {
        // Si no existe, mandamos el error y el false
        callback("usuario y/o contraseña incorrectos.", false);
    }
}

// Evento del botón
document.querySelector('#btnEntrar').addEventListener('click', () => {
    const u = document.querySelector('#usuario').value;
    const p = document.querySelector('#password').value;

    // Ejecutamos la validación
    validarCredenciales(u, p, mostrarResultado);
});