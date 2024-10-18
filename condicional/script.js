//Condicionais são uma forma de tomar decisões, de fazer o computador executar essas decisões.

//variaveis 
// 3 var, let e const 
//prompt pergunta algo ao usuario;
// sempre que usamos dados textuais ""
//string
//let nome =  prompt("Qual é o seu nome?");
// alert usamos para exibir uma mensagem
// alert("Seja bem vindo(a), " + nome);

// let idade = prompt("Quantos anos você tem?");
// if significa "se"
// else significa "senão"
// if (condição) {codigo que será executado}
// if (idade >= 18) {
//     alert("Você ja pode tirar a carteira de motorista!!!!")
// }else{
//     alert("Você ainda não tem idade para dirigir!")
// }

let gostarDePizza = prompt("Você gosta de pizza? responda (sim ou não)");
// === estritamente igual
if (gostarDePizza === "sim"){
    alert("Que otimo! Vamos comer juntos!")
}else {
    alert("Tudo bem, talvez você goste de outra comida");
}