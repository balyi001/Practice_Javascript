// Usuarios almacenados
const usuariosAcademia = [
    { user: "admin", pass: "1234" },
    { user: "profe", pass: "5678" },
    { user: "diego", pass: "1357"}
];

function validarAcceso() {
    const u = document.querySelector("#usuario").value;
    const p = document.querySelector("#password").value;
    const errorMsg = document.querySelector("#mensajeError");

    const ingreso = usuariosAcademia.find(item => item.user === u && item.pass === p);

    if (ingreso) {
        window.location.href = "index.html";
    } else {
        errorMsg.textContent = "Usuario o contraseña no válidos.";
    }
}