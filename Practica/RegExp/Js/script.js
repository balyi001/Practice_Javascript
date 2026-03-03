let regex = /hola/;

const validateText = () =>{
    let message = document.getElementById('name').value;
    let result = message.match(/\d+/g);
    let nuevo = message.replace(/\d+/, "");
    console.log(regex.test(message));
    console.log(result);
    console.log(nuevo);
}

const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', () =>{
    validateText()
})

// Validar si el correo electronico digitado en una caja de texto es válido 