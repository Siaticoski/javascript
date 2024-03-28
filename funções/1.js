import rl from "readline-sync"


//Declaração de função
function caixa_alta(string) {
    return string.toUpperCase();
}
let nome = rl.question("Informe seu nome: ")
console.log(`Meu nome é ${caixa_alta(nome)}`)

//Expressão de função
const uppercase = function (string) {return string.toUpperCase()};
console.log(`Prazer meu nome é ${uppercase(nome)}`);

//Função de seta
const mauiscula = (string) => string.toUpperCase();
console.log(`Vou ter que repetir meu nome é, ${mauiscula(nome)}!?`)