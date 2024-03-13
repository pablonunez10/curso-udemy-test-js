//Obetos - Destructuring con 2 o mas objetos

const auto = {
    nombre : "Mercedes",
    color : "Gris",
    precio : "303000"
}

const persona = {
    nombre : "manu",
    color : "blanco",
    altura : "1.78",
    premiun : true
}
const { nombre, color, altura, premiun} = persona
const { nombre: nombreCliente, color: colorCliente,precio } = auto
console.log(nombre,color,altura, premiun)

console.log(nombre)
console.log(nombreCliente)