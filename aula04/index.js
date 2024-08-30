import jsonAlunos from './alunos.json' with {type: 'json'};
console.log(jsonAlunos);

const alunoJson = `{
    "nome": "João",
    "email":"joao@email.com",
    "turma": "Clamed"
}`

console.log(alunoJson)
console.log(JSON.parse(alunoJson))

const alunoObject = {
    nome: "Maria",
    email: "maria@email.com",
    turma: "Clamed"
}

console.log(JSON.stringify(alunoObject))