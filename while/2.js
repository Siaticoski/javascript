import ED, {questionInt} from 'readline-sync';

let NA = ED.questionInt("Informe a quantidade de alunos: ");

let SM = 0;
let ContAluno = 1;


while (ContAluno <= NA) {
    console.log(`Aluno ${ContAluno}.`);

    let SomaNotas = 0;
    let contadorBimestres = 1;

    while (contadorBimestres <= 4) {
        let nota = ED.questionInt(`Digite a nota do ${contadorBimestres}º bimestre do aluno ${ContAluno}.`)
        SomaNotas = SM + nota;
        contadorBimestres++;
    }

    let MA = SomaNotas / 4;

    SM += MA;

    console.log(`Média do aluno ${ContAluno}: ${MA.toFixed(2)}`);

    ContAluno++;

}


let MGT = SM / NA;

console.log(`Média geral da turma: ${MGT.toFixed(2)}`);