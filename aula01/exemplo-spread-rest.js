// const frutas1 = ["Maça", "Abacaxi", "Limão"]
// const frutas2 = ["Banana", "Melancia", "Laranja"]

// // const novoArray = frutas1.concat(frutas2)
// const novoArray = [...frutas1, ...frutas2]

// console.log(novoArray)

const usuario = {
    nome: "Bruno",
    email: "bruno@email.com"
}

const usuario2 = {...usuario}

// const usuario2 = {
//     nome: usuario.nome,
//     email: usuario.email
// }

usuario2.nome = "Davi"

console.log(usuario)
console.log(usuario2)