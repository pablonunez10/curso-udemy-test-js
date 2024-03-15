    // fetch (url).then( (respuesta) => {
    //         return  respuesta.json()
    // })
    // // .then ( (resultado) => {
    // //     console.log('Resultado casi listo')
    // // })
    // .then ( (resultado) => {
    // resultado.forEach(  (comentario) => {
    //     console.log(comentario)
    //   })
    // })
    const url = 'https://jsonplaceholder.typicode.com/comments'

const consulrarApi = async () => {
    const respuesta = await fetch(url)
    console.log('despues de respuesta')
    const resultado = await respuesta.json()
    console.log('despues de resultado')
    // resultado.forEach( comentario => {
    //     console.log(comentario)
    // });

}

consulrarApi()