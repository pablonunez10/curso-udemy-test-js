
const casa = ['Puerta', 'Heladera', 'Mesa', 'Silla', 'Termos']
// const nuevoArray2 = casa.map( tech => {
//     if (tech === 'Puerta') {
//         return 'Gato'
//     } else {
//         return tech
//     }
// })

const nuevoArray = casa.filter ( tech => {
    return tech !== 'Puerta'
})

console.log(nuevoArray)
// console.log(nuevoArray2)
