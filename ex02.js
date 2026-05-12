// Sistema de Aprovação de Aluno

const readline = require("readline-sync")

console.log("----- Registro de nota final -----")
console.log("")
console.log("menor que 5 Reprovado")
console.log("")
console.log("menor que 7 Recuperação")
console.log("")
console.log("maior ou igual a 7 Aprovado")
console.log("")
let nota = readline.questionFloat("Qual foi sua nota: ")
console.log("")
if(nota < 5){
    console.log("")
console.log("O aluno foi Reprovado")
console.log("")
}else if(nota < 7){
console.log("O aluno ficou de recuperação")
console.log("")
}else{nota >= 7
    console.log("O aluno foi aprovado") 
}