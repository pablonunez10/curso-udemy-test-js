//Eventos del DOM -Click

const heading = document.querySelector('.heading')
//cambia el text 
heading.addEventListener('click',  () => {
    // console.log('Diste Click')
    heading.textContent = 'Nuevo Heading al Darle click'
})

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        console.log('Diste click en el enlace')
    })
})
