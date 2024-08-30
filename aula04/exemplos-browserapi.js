// setTimeout(() => alert("Passaram 3 segundos"), 3000)
// setInterval(() => alert("Passaram 2 segundos"), 2000)

const user = {
    nome: "Bruno",
    email: "bruno@email.com"
}

localStorage.setItem("user", JSON.stringify(user))
console.log(JSON.parse(localStorage.getItem("user")))