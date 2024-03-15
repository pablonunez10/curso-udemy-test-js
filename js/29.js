//Fetch API

const url = 'https://jsonplaceholder.typicode.com/comments'
    fetch (url).then( (respuesta) => {
            return  respuesta.json()
    })
    // .then ( (resultado) => {
    //     console.log('Resultado casi listo')
    // })
    .then ( (resultado) => {
    resultado.forEach(  (comentario) => {
        console.log(comentario)
      })
    })