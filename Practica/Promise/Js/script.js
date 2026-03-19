const Sum = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a === "number" && typeof b === "number"){
            resolve(a + b); // Resolver la promesa
        }
        else{
            reject("Ambas variables deben ser numéricas") // Rechaza la promesa
        }
    });
}

Sum(7, 2)
.then(res => console.log(`La suma de 7 + 2 es: ${res}`))
.catch(err => console.log(`${err}`))
.finally(console.log("Promesa finalizada"))

//Crear la resta, multiplicacion y division como promesas
//Si los tipos de datos son numericos se resuelve sino se rejectan.
//En la division si el denominador es cero se debe rechazar
//En el html crear un formulario con las 3 cajas de texto y 5 botones.

//Crear una promesa que reciba 3 numeros y calcule su promedio
//La promesa se resuelve si los 3 numeros son numericos y mayores a cero
//en casi contrario debe ser rechazada