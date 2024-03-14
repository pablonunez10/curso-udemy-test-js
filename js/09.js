const casa = ['Puerta', 'Heladera', 'Mesa', 'Silla', 'Termos']
//Agregar elmentos al array
// casa.push('Bebedero') //Agrega al final del array
// casa.unshift('Gas') // aGrega al inicio

// const newArreglo = [...casa, 'Perro'] //Al final del array
// const newArreglo2 = ['Perro', ...casa] //Al iinicio del array

//ELiminar elementos del array
// casa.pop() //Elimina el ultimo
// casa.shift() //ELimina del inicio
// casa.splice(2, 1)//Elimina de una posicion especifica

// const nuevoArreglo = casa.filter( function (tech) {
    // console.log(tech)
    // return tech !== 'Puerta'
// })
//Reemplazar del arrat
// casa[0] = 'Muebles'
const nuevoArray3 = casa.map(function(tech) {
    if (tech === 'Puerta'){
        return 'Lavarropa'
    } else  {
        return tech
    }
})

// console.table(newArreglo)
console.table(casa)
console.table(nuevoArray3)
// console.table(nuevoArreglo)
