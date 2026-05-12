// Calculadora de Desconto

const readline = require("readline-sync")

console.log("==== Área de Desconto ==== ")
console.log("")
console.log("Abaixo de 200 sem desconto")
console.log("Abaixo de 500 10% de desconto")
console.log("Acima de 500 20% de desconto ")
console.log("")
let v = readline.questionFloat("Qual foi o valor da sua compra: ")
console.log("")

if(v < 200){
console.log("Sem desconto")
console.log("")
}else if(v <= 500){
console.log("Desconto de 10%")
console.log("")
console.log(`Você tem ${v*0.1}R$ de desconto`)
}else {v > 500
 console.log("Você tem um desconto de 20%")   
 console.log("")
 console.log(`Você tem ${v*0.2}R$ de desconto`)
}
