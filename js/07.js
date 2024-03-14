// Unir 2 objetos 

const auto = {
    nombre : "Mercedes",
    color : "Gris",
    precio : "303000"
}

const persona = {
    nombre : "manu",
    color : "blanco",
    altura : "1.78",
    premiun : true
}

// const nuevoObejto = Object.assign(auto, persona)
// const nuevoObjeto2 = {...auto, ...persona}
const nuevoObjeto2 = {
    auto: {...auto},
    persona: {...persona}
}
console.log(nuevoObjeto2)
console.log(auto)
console.log(persona)