const saldo = 600
const pagar = 700
const tarjeta = false

if (saldo > pagar ) {
    console.log('Si podes pagar')
} else if (tarjeta){
    console.log('Puedes pagar con la tarjeta')
}
 else  {
    console.log('No podes pagar')
}