// Definicion del array de objetos
const students = [
    {nombre: "Ana", edad: 20, carrera: "Ingenieria"},
    {nombre: "Luis", edad: 22, carrera: "Diseño"},
    {nombre: "María", edad: 21, carrera: "Programación"}
];

console.log("--- Lista de Estudiantes ---");

// Usamos un ciclo para poder listar los datos del array
students.forEach((student, index) =>{
    console.log(`${index + 1}. Nombre: ${student.nombre} | Carrera: ${student.carrera}`);
});