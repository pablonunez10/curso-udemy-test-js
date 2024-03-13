//Tipos de datos
// Undefined
//typeoff: Tipo de dato
// let cliente
// console.log(cliente)

//boolean
const descuento  = false
console.log(descuento)

//Number
const numero1 = 20.20
const numero2 = 20.30
const numero3 = 20.40
//todos se les trata como number
console.log(typeof numero1)

//Cadena de Texto o String

const alumno = 'Pablo'
const numero4 = '30'

console.log(alumno)

console.log(typeof numero4)

//BigInt

const numeroGrande = BigInt(985845698526523652365236512541252)

console.log(typeof numeroGrande)

const numero5 = 20
const numero6 = 30

//no se puede mezclar numero grande con pequeno



const numero7 = '20'
const numero8 = 30


//Symbol

const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol)
console.log(primerSymbol.valueOf())
console.log(segundoSymbol.valueOf())


//Null 

const descuentoOficial = null

console.log(typeof descuentoOficial)

