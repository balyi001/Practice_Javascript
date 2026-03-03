function calcularEstadisticas() {
    // 1. Definimos las variables para guardar los datos
    let positivos = 0;
    let negativos = 0;
    let sumaPositivos = 0;
    let maximo = -Infinity; // Empezamos con el valor más bajo posible
    let minimo = Infinity;  // Empezamos con el valor más alto posible
    let numero = 0;

    // 2. Iniciamos el ciclo
    while (numero !== 99) {
        numero = parseInt(prompt("Ingresa un número (99 para terminar):"));

        // Si el número es 99, salimos del ciclo de inmediato
        if (numero === 99) break;

        // Lógica para el máximo y mínimo
        if (numero > maximo) maximo = numero;
        if (numero < minimo) minimo = numero;

        // Lógica para positivos y negativos
        if (numero > 0) {
            positivos++;
            sumaPositivos += numero;
        } else if (numero < 0) {
            negativos++;
        }
    }

    // 3. Calculamos el promedio (evitando dividir por cero)
    let promedioPositivos = positivos > 0 ? (sumaPositivos / positivos) : 0;

    // 4. Mostramos los resultados
    alert(
        "Resultados:\n" +
        "- Positivos: " + positivos + "\n" +
        "- Negativos: " + negativos + "\n" +
        "- Suma Positivos: " + sumaPositivos.toLocaleString() + "\n" +
        "- Promedio Positivos: " + promedioPositivos.toFixed(2) + "\n" +
        "- Valor Máximo: " + maximo + "\n" +
        "- Valor Mínimo: " + minimo
    );
}