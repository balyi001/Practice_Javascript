const validRequirements =() =>{
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;

    const message = document.querySelector("#message");
    const result = document.querySelector("#result");

    message.textContent = "";
    result.textContent = "";

    if (name.trim() === "" || age === ""){
        message.textContent = "Error: Todos los campos son obligatorios";
        message.className = "error";
    }
    else if (parseInt(age) <= 0){
        message.textContent = "Error: La edad debe ser mayor que 0";
        message.className = "error";
    }
    else{
        message.textContent = "Datos validados correctamente";
        message.className = "correct";

        const newResult = document.createElement("p");
        newResult.textContent = `Usuario registrado: ${name} (${age} años)`;

        result.appendChild(newResult);

        document.querySelector("#name").value = "";
        document.querySelector("#age").value = "";
    }
};

const btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.addEventListener('click', () =>{
    validRequirements()
})