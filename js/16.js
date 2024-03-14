const casa = ['Puerta', 'Heladera', 'Mesa', 'Silla', 'Termos']
const numeros  = [10, 20, 30, 40 ]
// let nuevoArray; 


//Filter
// nuevoArray = casa.filter ( tech => {
    // return tech !== 'Puerta'
// })
// Comprobar si un elemento existe
// const resultado = casa.includes('Puerta')

//some si almenos uno cumple la condicion
// const resultado2 = numero.some(numero => numero > 39 )

//find Devuelve el primer elemento que cumpla la condicion
// const resultado = numero.find ( numero => numero > 15)

//Every Retorna true o flase si todos cumplen la condicion
// const resultado = numeros.every( numero => numero <= 0)


//Reduce
// const resultado = numeros.reduce((total, numero) => numero + total,0)

//Filter - Crea un nuevo array en base a una condicion
// const resultado = casa.filter(tech => tech === 'Puerta')
// const resultado = numeros.filter(numero => numero > 15)

casa.forEach( (tech, index) => console.log(index))
// Crea un nuevo arreglo

const arraMap = casa.map( tech => tech)
console.log(arraMap)