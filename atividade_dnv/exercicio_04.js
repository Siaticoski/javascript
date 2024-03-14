import entradaDados from 'readline-sync';

let categoria = entradaDados.question("Digite sua categoria (A,B,C e D): ");
let aumento = entradaDados.questionFloat("Digite seu salário: ");

switch (categoria) {
    case "A":
        console.log(aumento = aumemto * 1.05);
        break;
    case "B":
        console.log(aumento = aumento * 1.1);
        break;
    case "C":
        console.log(aumento = aumento * 1.15);
        break;
    case "D":
        console.log(aumento = aumento * 1.2);
        break;
    default:
        break;
}