function hacerOperacion(operador) {
    // Tomamos los valores de las cajas de texto
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let cajaRespuesta = document.getElementById('respuesta');

    // Variable para guardar el resultado
    let resultado;

    // Evaluamos qué botón se presionó
    if (operador === '+') {
        resultado = n1 + n2;
    } else if (operador === '-') {
        resultado = n1 - n2;
    } else if (operador === '*') {
        resultado = n1 * n2;
    } else if (operador === '/') {
        resultado = n1 / n2;
    } else if (operador === '%') {
        resultado = n1 % n2;
    }

    // Ponemos el resultado en la tercera caja
    cajaRespuesta.value = resultado;
}