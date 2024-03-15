// manipular elementos html
const heading = document.querySelector('.heading')

heading.textContent = 'Hola Manu'
console.log(heading)

const inputNombre = document.querySelector('#nombre')

inputNombre.value = 'HOLAAAAAAAAaa'

console.log(inputNombre)

const enlaces = document.querySelector('.navegacion a')
enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace')