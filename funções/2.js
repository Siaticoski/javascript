import rl from "readline-sync"
/*
02. Crie uma função que receba um número como
parâmetro e verifique se ele é par ou ímpar. Retorne uma
string.
*/

function n(cal) {
    return cal % 2 == 0 ? "Par!" : "Impar!";
};
let num = rl.questionInt("Digite um número: ");
console.log(`Your number is ${n(num)}`);

const par = function (p) { return p % 2 == 0 ? "Par!" : "Impar!"};
console.log(`Seu número do bingo é ${par(num)}`);

const impar = (i) => i % 2 == 0 ? "Par!" : "Impar!";
console.log(`Seu número do megacena é ${impar(num)}`);