function convertir() {
    const valorDolar = 4000;
    let cantidadDolares = parseFloat(document.getElementById("dolares").value);
    
    // Validamos que el número sea válido para evitar el "NaN"
    if (isNaN(cantidadDolares)) {
        document.getElementById("cambio").innerText = "Por favor, ingresa un número válido.";
        return;
    }

    let resultado = cantidadDolares * valorDolar;

    // Formateamos el resultado con puntos de miles
    let resultadoFinal = resultado.toLocaleString('es-CO');

    document.getElementById("cambio").innerText = "La Cantidad es: $" + resultadoFinal + " Pesos";
}