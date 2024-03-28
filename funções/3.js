import rl from "readline-sync"

function n(i, p) {
    return i + p;
};
let soma = rl.questionFloat("Informe o primeiro número: ");
let so = rl.questionFloat("Informe o segundo número: ");
console.log(`A soma do dinheiro do banco é ${n(soma, so)}`);

const s = function p(o, t) {return o + t};
console.log(`A soma da sua divida é ${s(soma, so)}`);

const a = (w, q) => w + q;
console.log(`A soma do nosso cartão da ${a(soma, so)}`);
