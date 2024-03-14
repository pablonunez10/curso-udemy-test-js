//Iteradores

const casa = ['Puerta', 'Heladera', 'Mesa', 'Silla', 'Termos']

//ForEachc - seejecuta de acuerdo a la cantidad -acccede al elmento del array

const arrayForeach = casa.forEach(function (tech){
    // console.log('Ejecutando')
    return tech
})
// Crea un nuevo arreglo
const arrayMap = casa.map(function (tech){
    // console.log('Ejecutando')
    return tech
})

console.log(arrayForeach)
console.log(arrayMap)