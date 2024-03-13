//Manipulacion de objetos

const auto = {
    nombre : "Mercedes",
    color : "Gris",
    precio : "303000"
}
//respeta el objeto como esta
// Object.freeze(auto)
//solamente te deja modificar propiedades existentes
// Object.seal(auto)

//Reescribir un valor mientras sea un objeto
auto.nombre = "Corolla"
//sino exite lo agrega a la tabla
auto.imagen = 'imagen.png'
//para eliminar objeto
delete auto.imagen
console.table(auto)
