function calcular() {

    // Datos que hay en el html
    let n = document.getElementById("numero").value;
    let cajaTexto = document.getElementById("texto_resultado");
    
    // Definimos las variables para la suma y para guardar los resultados
    let a = 0;
    let b = 1;
    let resultado = "";

    // Mientras que i sea menor al numero puesto, este aumentara en 1 cada vez
    for (let i = 0; i < n; i++) { // contador invisible para las sumas

        // Va guardando los datos, añadiendo un espacio cada vez hasta que el contador termine
        resultado = resultado + a + " ";

        // Los valores se van sobreescribiendo hasta que no hayan mas valores
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }

    // Muestra todos los datos que se guardaron mientras terminaba el contador
    cajaTexto.innerText = resultado;
}

// 0 1 1 2 3 5