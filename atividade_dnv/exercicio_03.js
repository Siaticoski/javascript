import entradaDados from 'readline-sync';

let first = entradaDados.questionFloat("Primeiro numero: ");
let second = entradaDados.questionFloat("Segundo numero: ");
let calculadora = entradaDados.question("Digite uma operação: ");

switch (calculadora) {
    case "*":
        console.log(first * second);
        break;
    case "+":
        console.log(first+second);
        break;
    case "-":
        console.log(first - second);
        break;
    case "/":
        console.log(first / second);
        break;
    default:
        console.log("Conta inválida!")
        break;
};