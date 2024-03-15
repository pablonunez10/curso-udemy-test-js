const inputNombre = document.querySelector('.nombre')
// inputNombre.type = 'password'
// captura todos los eventos
inputNombre.addEventListener('input', (e) => {
    // console.log('Escribiendo en el input')
    // console.log(inputNombre.value)
    // console.log(e)
    console.log(e.target.value)
})

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', (e) => {
    inputPassword.type = 'text'

    setTimeout (() => {
        inputPassword.type = 'password'
    }, 100);
})

//por cada letra que escribias se ejecuta
// inputNombre.addEventListener('keyup', () => {
//     console.log('Escribiendo en el input')
// })

// inputNombre.addEventListener('keydown', () => {
//     console.log('Escribiendo en el input')
// })

