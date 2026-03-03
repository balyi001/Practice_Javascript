// Arrays
// Show data arrays

const ShowDataFor= () =>{
    let Numbers = [2,7,9,5,4];
    Numbers.sort(); //Ordena Ascendente
    let Add = 0;
    let Pares;
    let Impares;
    let Data = "";
    for(i = 0; i < Numbers.length; i++){
        console.log(Numbers[i]);

        Data += "<tr>" +
        "<td>" + i + "</td>"+
        "<td>" + Numbers[i] + "</td>"+
        "</tr>";
        Add += Numbers[i]
    }
    document.getElementById('result').innerHTML = Data

    let promedio = Add / Numbers.length;

    if (Numbers[i] % 2 === 0){
        Pares++;
    } else {
        Impares++;
    }

    console.log("==============================");
    console.log("====== Datos Solicitados======");
    console.log("==============================");
    console.log("La suma es: " +Add);
    console.log("El Promedio es: " +promedio);
    console.log("El total de Pares es: " +Pares);
    console.log("El tota de Impares es: " +Impares);
    console.log("==============================");
    console.log("=============FIN==============");
    console.log("==============================");

    // Calcular el promedio y mostrarlo.
    // Calcular y mostrar cantidad de pares y cantidad de numeros impares
}

const ShowDataForEach= () =>{
    let Numbers = [2,7,9,5,4];
    console.log("Example Foreach")
    Numbers.forEach(Element => {
        console.log(Element);
    });
}