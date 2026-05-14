// Maior Número

const readline = require("readline-sync")

console.log(" ====Coloque 3 Números Inteiros==== ")
let m = 0 

for(let i = 1; i <= 3; i++ ){
console.log("")
let n = readline.question(`${i} Números: `)
console.log("")
if(n === m ){
m = n 
}
if(n > m){
    m = n 
}
}
console.log(" O maior número é: ")
console.log("")
console.log(m)