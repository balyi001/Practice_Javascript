let products = [];
let countproducts = 0;

const createProduct = ()=>{
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    countproducts++;

    const newProduct = {
        id: countproducts,
        name: name,
        price: price
    };

    //Add products to array products[]
    products.push(newProduct);
}

const listAllProducts = () => { // List all products in console
    let bodyTable = "";
    products.forEach(product => {
        bodyTable += '<tr>' +
                   `<td>${product.id}</td>` +
                   `<td>${product.name}</td>` +
                   `<td>${product.price}</td>` +
                   '</tr>';
    });

    document.getElementById("result").innerHTML = bodyTable;
}

const btnCreate = document.getElementById("btnCreate");
btnCreate.addEventListener("click", () => {
    createProduct(); //call to function createProduct
    listAllProducts();
});