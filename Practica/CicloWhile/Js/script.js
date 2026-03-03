const CountWords = () => {
    let word = "";
    let counterwords = -1;

    while (word != "fin") {
        word = prompt("Ingrese una palabra (escriba 'fin' para terminar):").toLowerCase; // Solicita al usuario que ingrese una palabra

        counterwords++;
    }
    alert("Cantidad de palabras ingresadas: " + counterwords);
}

// 1. Crear en HTML y javascript un conversor de monedas que permita convertir una cantidad de dolares americanos ingresados en una caja de texto a pesos colombianos.
// Mostrar el resultado en un div 
// El valor del dolar es una constante

// 2. Realizar en html y javascript un programa que permita
// ingresar un numero mientras no se digite el 99.
// Calcular y mostrar: 
// cantidad de numeros positivos,
// cantidad de numeros negativos,
// suma de numeros positivos,
// promedio de numeros positivos,
// Valor maximo
// Valor minimo