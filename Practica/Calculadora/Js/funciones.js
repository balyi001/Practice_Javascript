// Función para Suma y Resta
function hacerOperacion(operador) {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    if (isNaN(n1) || isNaN(n2)) return; // Evita errores si están vacíos

    if (operador === '+') {
        resultado = n1 + n2;
    } else if (operador === '-') {
        resultado = n1 - n2;
    }

    document.getElementById('respuesta').value = resultado;
    document.getElementById('resultadoDiv').innerHTML = resultado;
}

// Funciones de tipo flecha para Multiplicación, División y Porcentaje
const multiplicar = () => {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let resultado = n1 * n2;
    
    document.getElementById('respuesta').value = resultado;
    document.getElementById('resultadoDiv').innerHTML = resultado;
};

const dividir = () => {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let resultado = n2 !== 0 ? n1 / n2 : "No se puede dividir por cero";
    
    document.getElementById('respuesta').value = resultado;
    document.getElementById('resultadoDiv').innerHTML = resultado;
};

const porcentaje = () => {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let resultado = n1 % n2;
    
    document.getElementById('respuesta').value = resultado;
    document.getElementById('resultadoDiv').innerHTML = resultado;
};