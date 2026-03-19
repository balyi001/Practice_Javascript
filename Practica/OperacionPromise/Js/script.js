// Referencias a los elementos del DOM
const txtN1 = document.querySelector("#number1");
const txtN2 = document.querySelector("#number2");
const txtN3 = document.querySelector("#number3");
const lblResultado = document.querySelector("#resultado");

// --- PROMESAS ---

const Sumar = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a === "number" && typeof b === "number" && !isNaN(a) && !isNaN(b)) {
            resolve(a + b);
        } else {
            reject("Error: Los datos deben ser numéricos");
        }
    });
};

const Restar = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a === "number" && typeof b === "number" && !isNaN(a) && !isNaN(b)) {
            resolve(a - b);
        } else {
            reject("Error: Los datos deben ser numéricos");
        }
    });
};

const Multiplicar = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a === "number" && typeof b === "number" && !isNaN(a) && !isNaN(b)) {
            resolve(a * b);
        } else {
            reject("Error: Los datos deben ser numéricos");
        }
    });
};

const Dividir = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
            reject("Error: Los datos deben ser numéricos");
        } else if (b === 0) {
            reject("Error: No se puede dividir por cero");
        } else {
            resolve(a / b);
        }
    });
};

const Promedio = (a, b, c) => {
    return new Promise((resolve, reject) => {
        // Validación: numéricos Y mayores a cero
        if (typeof a === "number" && typeof b === "number" && typeof c === "number" &&
            a > 0 && b > 0 && c > 0) {
            resolve((a + b + c) / 3);
        } else {
            reject("Error: Los 3 números deben ser numéricos y mayores a cero");
        }
    });
};

// --- EVENTOS (Lógica de los botones) ---

// Función auxiliar para obtener valores de los inputs
const getValues = () => [Number(txtN1.value), Number(txtN2.value), Number(txtN3.value)];

document.getElementById("btnSum").addEventListener("click", () => {
    const [n1, n2] = getValues();
    Sumar(n1, n2)
        .then(res => lblResultado.innerText = `Resultado: ${res}`)
        .catch(err => alert(err));
});

document.getElementById("btnRest").addEventListener("click", () => {
    const [n1, n2] = getValues();
    Restar(n1, n2)
        .then(res => lblResultado.innerText = `Resultado: ${res}`)
        .catch(err => alert(err));
});

document.getElementById("btnMult").addEventListener("click", () => {
    const [n1, n2] = getValues();
    Multiplicar(n1, n2)
        .then(res => lblResultado.innerText = `Resultado: ${res}`)
        .catch(err => alert(err));
});

document.getElementById("btnDiv").addEventListener("click", () => {
    const [n1, n2] = getValues();
    Dividir(n1, n2)
        .then(res => lblResultado.innerText = `Resultado: ${res}`)
        .catch(err => alert(err));
});

document.getElementById("btnProm").addEventListener("click", () => {
    const [n1, n2, n3] = getValues();
    Promedio(n1, n2, n3)
        .then(res => lblResultado.innerText = `Resultado Promedio: ${res.toFixed(2)}`)
        .catch(err => alert(err));
});