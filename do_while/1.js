import dw from 'readline-sync';

const num_ale = Math.floor(Math.random() * 100) + 1;

let tentativa;

do {

    tentativa = dw.questionInt("Tente advinhar o numero de (1 a 100) para ganhar no show do milhao!");

    if (tentativa === num_ale) {
        console.log("Você acertou o numero e levou o premio para casa!")
    }else if (tentativa < num_ale) {
        console.log("Tente um numero maior!")
    }else{
        console.log("Tente um numero menor!")
    }





} while (tentativa !== num_ale);