// Definicion de los arrays
let products = ["Agua", "Azucar", "Cafe", "Panela", "Sal"];
let prices = [1500, 3000, 9000, 5000, 2000];

// Referenciar a la tabla
let container = document.getElementById("list");

// Variable para acumular y guardar las filas
let content = "";

// Ciclo para recorrer los arrays y comenzar a sobreescribir las filas
for (i = 0; i < products.length; i++){
    content += "<tr>";
    content += "<td>" + products[i] + "</td>";

    content += "<td>" + prices[i] + "</td>";
    content += "</tr>";
}

// Al terminar inserta todo lo que ya obtuvimos
container.innerHTML = content;