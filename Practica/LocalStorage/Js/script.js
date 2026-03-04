const saveCustomer = () =>{
    const nameInput = document.querySelector('#name');
    const name = nameInput.value;

    if(name.length > 0){
        localStorage.setItem("name", name);
    }
}

const printCustomer = () =>{
    console.log(localStorage.getItem("name"));
}

const btnSave = document.querySelector('#btnSave');
btnSave.addEventListener('click', () => {
    saveCustomer();
    printCustomer();
});
