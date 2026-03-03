const formReg = document.querySelector("#formReg");
const btnEnviar = document.querySelector("#btnEnviar");
const list = document.querySelector("#list");
const database = [];

// Función para validar y mostrar errores
const validate = () => {
    // Captura de valores
    const values = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone").value,
        password: document.querySelector("#password").value
    };

    // Reglas de validación (RegEx)
    const rules = {
        name: /^[A-Za-z\s]+$/.test(values.name),
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email),
        phone: /^\d{10}$/.test(values.phone),
        password: /^(?=.*[\d]).{8,}$/.test(values.password)
    };

    // Mostrar u ocultar errores usando clases
    // Nota: Aquí buscamos el elemento de error que ya debe estar en el HTML o creado sencillamente
    Object.keys(rules).forEach(field => {
        const errorEl = document.querySelector(`#error-${field}`);
        if (errorEl) {
            errorEl.className = (rules[field] || values[field] === "") ? "hidden" : "error-message visible";
        }
    });

    // Retorna si todo es válido
    return rules.name && rules.email && rules.phone && rules.password;
};

// Escuchar cambios en el formulario
formReg.addEventListener("input", () => {
    btnEnviar.disabled = !validate();
});

// Guardar datos
formReg.addEventListener("submit", (e) => {
    e.preventDefault();

    const newUser = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone").value
    };

    database.push(newUser);

    // Agregar a la tabla de forma simple
    list.textContent += `
        <tr>
            <td>${newUser.name}</td>
            <td>${newUser.email}</td>
            <td>${newUser.phone}</td>
        </tr>
    `;

    formReg.reset();
    btnEnviar.disabled = true;
    alert("Registrado!");
});