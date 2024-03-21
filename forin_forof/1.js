const pessoa = {
    nome: "Jonas",
    idade: 60,
    cidade: "São Paulo"
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}