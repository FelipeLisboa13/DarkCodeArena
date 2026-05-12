//Tabuada

const readline = require("readline-sync")
console.log(" === Tabuada de números Inteiro === ")
console.log(" ")
let n = readline.questionInt("Número da tabuada: ")
console.log("")
for(let i = 1; i < 11; i++){
console.log(` ${n} x ${i} = ${i*n} `)
console.log(" ")
}