const ShowString = () =>{
    const message = "Hoy es Jueves".toLowerCase();

    let vowelCount = 0;
    for(let i = 0; i < message.length; i++){
        console.log(message[i].toUpperCase());

        //Contar Vocales.

        if(message[i] === "a" || message[i] === "e" || message[i] === "i" || 
            message[i] === "o" || message[i] === "u"){
            vowelCount++;
        }
    }
        return vowelCount;
}

const NoVocals = () =>{
    const message = "Hoy es Jueves".toLowerCase();

    let NovowelCount = 0;
    for(let i = 0; i < message.length; i++){
        console.log(message[i].toUpperCase());

        //Contar No Vocales.

        if(message[i] != "a" && message[i] != "e" && message[i] != "i" && 
            message[i] != "o" && message[i] != "u"){
            NovowelCount++;
        }
    }
        return NovowelCount;
}

const btn = document.getElementById('VerifyString');

btn.addEventListener('click', () =>{

    console.log("Cantidad de Vocales: " + ShowString());
    console.log("Cantidad de No Vocales: " + NoVocals());
});

    // Definicion de un objeto
const Product = {
    id: 7,
    name:'Agua',
    price: 5000
}

console.log(Product);
console.log(Product.name);
console.log("Vocales del " + Product.name + ": " + ShowString(Product.name));