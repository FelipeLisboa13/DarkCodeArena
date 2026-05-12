// Soma dos Números

const readline = require("readline-sync")

let soma = 0

for(let i = 1; i <= 5; i++){
    console.log("")
    let a = readline.questionInt(` ${i} Números: `)
    console.log("")
soma = soma + a 
}
console.log("===== Soma =====")
console.log("")
console.log(soma)