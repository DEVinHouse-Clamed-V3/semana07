let endereco = {}

async function buscarCep(){
    try {
        let resultado = await fetch("https://viacep.com.br/ws/63505020/json/")

        endereco = await resultado.json()
        console.log("endereço 2 " +  JSON.stringify(endereco))
    } catch (erro) {
        console.log(erro)
    }
}

buscarCep()
console.log("endereço 1 " + JSON.stringify(endereco))