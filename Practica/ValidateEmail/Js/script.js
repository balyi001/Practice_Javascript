const validateEmail = () => {
    // Capturamos el input y el valor que el usuario escribió
    const emailInput = document.getElementById('email').value;

    // Definimos la Expresión Regular para un email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(emailInput)) {
        alert("✅ El correo electrónico es válido");
    } else {
        alert("❌ Por favor, ingresa un correo electrónico válido");
    }
};

document.getElementById('btnValidate').addEventListener('click', validateEmail);