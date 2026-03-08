// Seleccionamos los elementos del formulario
const inputNombre = document.querySelector("#nombre");
const inputCorreo = document.querySelector("#correo");
const inputFecha = document.querySelector("#fechaNacimiento");
const inputIDHidden = document.querySelector("#idEstudiante");
const tabla = document.querySelector("#tablaCuerpo");

// Iniciamos el array leyendo lo que hay en localStorage
// Si no hay nada, empezamos con un array vacío
let listaEstudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];

// Función para guardar (Crear o Editar)
function guardarEstudiante() {
    const nombreVal = inputNombre.value;
    const correoVal = inputCorreo.value;
    const fechaVal = inputFecha.value;
    const idExistente = inputIDHidden.value;

    // Condicional para verificar que no haya campos vacíos
    if (nombreVal === "" || correoVal === "" || fechaVal === "") {
        alert("Todos los campos son obligatorios");
    } else {
        if (idExistente === "") {
            // Si el ID oculto está vacío, creamos un estudiante nuevo
            const nuevoEstudiante = {
                id: Date.now(), // Genera un número único basado en el tiempo
                nombre: nombreVal,
                correo: correoVal,
                fechaNacimiento: fechaVal
            };
            // Agregamos al array
            listaEstudiantes.push(nuevoEstudiante);
        } else {
            // Si hay un ID, buscamos y actualizamos el existente
            for (let i = 0; i < listaEstudiantes.length; i++) {
                if (listaEstudiantes[i].id == idExistente) {
                    listaEstudiantes[i].nombre = nombreVal;
                    listaEstudiantes[i].correo = correoVal;
                    listaEstudiantes[i].fechaNacimiento = fechaVal;
                }
            }
            inputIDHidden.value = ""; // Limpiamos el ID oculto
        }

        // Guardamos en localStorage y refrescamos la vista
        actualizarStorage();
        limpiarFormulario();
        dibujarTabla();
    }
}

// Convierte el array a texto y lo guarda en el navegador
function actualizarStorage() {
    const listaEnTexto = JSON.stringify(listaEstudiantes);
    localStorage.setItem("estudiantes", listaEnTexto);
}

// Función para mostrar los datos en el HTML
function dibujarTabla() {
    tabla.innerHTML = ""; // Limpiamos la tabla antes de escribir

    for (let i = 0; i < listaEstudiantes.length; i++) {
        const est = listaEstudiantes[i];
        
        // Creamos la fila
        const fila = document.createElement("tr");

        // Creamos celdas y asignamos contenido con textContent
        const cId = document.createElement("td");
        cId.textContent = est.id;

        const cNombre = document.createElement("td");
        cNombre.textContent = est.nombre;

        const cCorreo = document.createElement("td");
        cCorreo.textContent = est.correo;

        const cFecha = document.createElement("td");
        cFecha.textContent = est.fechaNacimiento;

        const cAcciones = document.createElement("td");

        // Botón de eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = function() {
            borrarEstudiante(est.id);
        };

        // Botón de editar
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.onclick = function() {
            prepararEdicion(est.id);
        };

        cAcciones.appendChild(btnEditar);
        cAcciones.appendChild(btnEliminar);

        // Agregamos todo a la fila
        fila.appendChild(cId);
        fila.appendChild(cNombre);
        fila.appendChild(cCorreo);
        fila.appendChild(cFecha);
        fila.appendChild(cAcciones);

        // Agregamos la fila a la tabla
        tabla.appendChild(fila);
    }
}

function borrarEstudiante(idABuscar) {
    // Filtramos el array para quitar el que tiene ese ID
    listaEstudiantes = listaEstudiantes.filter(function(est) {
        return est.id !== idABuscar;
    });
    actualizarStorage();
    dibujarTabla();
}

function prepararEdicion(idABuscar) {
    // Buscamos los datos del estudiante para ponerlos en los inputs
    const encontrado = listaEstudiantes.find(e => e.id === idABuscar);
    if (encontrado) {
        inputNombre.value = encontrado.nombre;
        inputCorreo.value = encontrado.correo;
        inputFecha.value = encontrado.fechaNacimiento;
        inputIDHidden.value = encontrado.id; // Guardamos el ID aquí
    }
}

function limpiarFormulario() {
    inputNombre.value = "";
    inputCorreo.value = "";
    inputFecha.value = "";
    inputIDHidden.value = "";
}

// Llamamos a la función al cargar el script para ver datos previos
dibujarTabla();