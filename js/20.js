
const autenticado = true

autenticado ? 
console.log('usuario autenticado') :
console.log('usuario no autenticado')

// Doble Ternario

const saldo = 600
const pagar = 800
const tarjeta = true

saldo > pagar ? 
    console.log('si puede pagar '):
    tarjeta ? 
        console.log(' puedes pagar con tarjeta') :
        console.log('no puedes pagar')