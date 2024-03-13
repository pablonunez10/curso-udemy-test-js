//Objetos

// const nombre =  "Tablet"
// const precio = 300
// const disponible = true

const auto = {
    nombre : "Mercedes",
    color : "Gris",
    precio : "303000"
}

console.log(auto)
console.table(auto)
console.log(auto.color)


//Destructuring
// para sacar valores y crear variables

const {nombre} = auto

console.log(nombre)

// Object literal Enhacement
//coloca dentro de un objeto
const autenticado = true
const usuario = 'Manu'

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto)