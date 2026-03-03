const GenerateNumbers=()=>{
    // ciclo for
    for(i=1; i<=10; i++){ // Init Cycle
        console.log(i);
        // alert(i);
        // result = result + '/n' + i;
        result = result + "<input type='text' value='" + i + "'><br>";

    } // End Cycle
    console.log(result);
    document.getElementById('result').innerHTML = result;
}

// Realice un programa que a partir de javascript Genere 
// los N primeros terminos de la serie de fibonacci. 
// Al dar clic en un boton de html debera generarse la 
// serie y mostarla en html.