let lista = JSON.parse(localStorage.getItem("estudiantes")) || [];

function obtenerEdad(f) {
    const hoy = new Date();
    const cumple = new Date(f);
    let edad = hoy.getFullYear() - cumple.getFullYear();
    const m = hoy.getMonth() - cumple.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumple.getDate())) {
        edad--;
    }
    return edad;
}

function guardarEstudiante() {
    const nom = document.querySelector("#nombre").value;
    const mail = document.querySelector("#correo").value;
    const tel = document.querySelector("#whatsapp").value;
    const fec = document.querySelector("#fechaNacimiento").value;
    const obs = document.querySelector("#observaciones").value;
    const idEdit = document.querySelector("#idEstudiante").value;

    // Expresiones regulares
    const regNombre = /^[a-zA-Z\s]+$/;
    const regCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regTel = /^\d{10}$/;

    if (!regNombre.test(nom)) return alert("El nombre debe ser solo letras.");
    if (!regCorreo.test(mail)) return alert("Correo inválido.");
    if (!regTel.test(tel)) return alert("WhatsApp requiere 10 números.");
    if (!fec) return alert("Fecha obligatoria.");

    if (idEdit === "") {
        const nuevo = { id: Date.now(), nombre: nom, correo: mail, whatsapp: tel, fecha: fec, observaciones: obs };
        lista.push(nuevo);
    } else {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].id == idEdit) {
                lista[i].nombre = nom;
                lista[i].correo = mail;
                lista[i].whatsapp = tel;
                lista[i].fecha = fec;
                lista[i].observaciones = obs;
            }
        }
        document.querySelector("#idEstudiante").value = "";
    }

    localStorage.setItem("estudiantes", JSON.stringify(lista));
    window.location.reload();
}

// Cargar tabla sin innerHTML
const cuerpo = document.querySelector("#tablaCuerpo");
if (cuerpo) {
    lista.forEach(est => {
        const fila = document.createElement("tr");

        const cNombre = document.createElement("td");
        cNombre.textContent = est.nombre;
        
        const cTel = document.createElement("td");
        cTel.textContent = est.whatsapp;
        
        const cEdad = document.createElement("td");
        cEdad.textContent = obtenerEdad(est.fecha) + " años";
        
        const cObs = document.createElement("td");
        cObs.textContent = est.observaciones || "Sin notas";

        const cAcciones = document.createElement("td");
        
        const btnEdit = document.createElement("button");
        btnEdit.textContent = "Editar";
        btnEdit.onclick = function() {
            document.querySelector("#nombre").value = est.nombre;
            document.querySelector("#correo").value = est.correo;
            document.querySelector("#whatsapp").value = est.whatsapp;
            document.querySelector("#fechaNacimiento").value = est.fecha;
            document.querySelector("#observaciones").value = est.observaciones;
            document.querySelector("#idEstudiante").value = est.id;
        };

        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar";
        btnBorrar.onclick = function() {
            if(confirm("¿Eliminar?")) {
                lista = lista.filter(e => e.id !== est.id);
                localStorage.setItem("estudiantes", JSON.stringify(lista));
                window.location.reload();
            }
        };

        cAcciones.appendChild(btnEdit);
        cAcciones.appendChild(btnBorrar);

        fila.appendChild(cNombre);
        fila.appendChild(cTel);
        fila.appendChild(cEdad);
        fila.appendChild(cObs);
        fila.appendChild(cAcciones);
        cuerpo.appendChild(fila);
    });
}