//Eventos del DOM- Submit
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value
    const alertaPrevia = document.querySelector('.alerta')
    if (alertaPrevia) {
        alertaPrevia.remove()
    }
    const alerta = document.createElement('DIV')
     alerta.classList.add('alerta')
    // console.log(nombre)
    // console.log(password)

    if (nombre === '' || password === '' ) {
        // console.log('Todos los campos son obligatorios')
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('error')
    } else {
        alerta.textContent = 'Buen Acceso'
        alerta.classList.add('exito')
    }
    // console.log('Enviaste formulario')
    // console.log(alerta)
    formulario.appendChild(alerta)

})