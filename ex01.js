// Verifacador de Números positivo, negativo ou zero 

const readline = require("readline-sync")

console.log("---- Verificador De Números ----")
console.log("")
console.log(" Identificador de sinal")
console.log("")
console.log(" 5 > 0 Positivo")
console.log(" 5 < 0 Negativo ")
console.log(" 5 = 0 é zero")
console.log("")
let ni = readline.questionInt("Informe o valor: ")
      console.log("")
if(ni > 0 ){
    console.log(`${ni} > 0 `)
     console.log("")
     console.log("O número é positivo")
     console.log("")
}else if (ni < 0 ){
    console.log(`${ni} < 0`)
    console.log("")
console.log("O número é negativo")
     console.log("")
}else{
    console.log(` ${ni = 0} = 0`)
    console.log("")
    console.log("O número é zero")
}