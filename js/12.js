//Funciones - Function Declaration

// function sumar(numero, numero2) {
//     console.log(numero)
//     console.log(numero2)

// }

// sumar(10, 20 )
function sumar(numero = 0, numero2 = 0) {
    return {
        resultado: numero + numero2,
        mensaje: 'Hola'
    }
}

const resultado = sumar(10, 20)
console.log(resultado)
console.log(mensaje)

