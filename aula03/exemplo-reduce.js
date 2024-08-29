const numeros = [5, 2, 10, 21, 56, 78, 32]

let soma = numeros.reduce((total, numeroAtual) => {
    return total + numeroAtual
    //      214
}, 10)

let maior = numeros.reduce((maior, num) => {
    return Math.max(maior, num)
}, 0)

console.log(soma)
console.log(maior)