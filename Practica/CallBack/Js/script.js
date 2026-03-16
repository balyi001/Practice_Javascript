// Esta función es el callback: recibe la suma y hace el resto del trabajo
function calcularYMostrarPromedio(sumaRecibida) {
    const promedio = sumaRecibida / 3;

    // Pintamos los resultados en el HTML usando querySelector
    document.querySelector('#txtSuma').textContent = sumaRecibida;
    document.querySelector('#txtPromedio').textContent = promedio.toFixed(2);
}

// Función principal: suma los 3 números y le "pasa la bola" al callback
function procesarOperacion(n1, n2, n3, callback) {
    const sumaTotal = n1 + n2 + n3;
    
    // Aquí es donde ocurre el callback
    callback(sumaTotal);
}

// Evento para capturar los datos cuando el usuario haga click
document.querySelector('#btnCalcular').addEventListener('click', () => {
    // Obtenemos los valores y los convertimos a números con Number()
    const valor1 = Number(document.querySelector('#num1').value);
    const valor2 = Number(document.querySelector('#num2').value);
    const valor3 = Number(document.querySelector('#num3').value);

    // Llamamos a la función principal enviando los 3 valores y la función callback
    procesarOperacion(valor1, valor2, valor3, calcularYMostrarPromedio);
});