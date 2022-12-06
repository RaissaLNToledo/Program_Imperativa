//Equipe 3
/* Integrantes:


*/

const dados = [
    {
        idade: 18,
        opiniao: "Regular"
    },
    {
        idade: 15,
        opiniao: "Bom"
    },
    {
        idade: 35,
        opiniao: "Ótimo"
    },
    {
        idade: 42,
        opiniao: "Ótimo"
    },
    {
        idade: 48,
        opiniao: "Bom"
    },
    {
        idade: 31,
        opiniao: "Ótimo"
    },
    {
        idade: 17,
        opiniao: "Regular"
    },
    {
        idade: 22,
        opiniao: "Bom"
    },
    {
        idade: 18,
        opiniao: "Bom"
    },
    {
        idade: 14,
        opiniao: "Ótimo"
    },
    {
        idade: 25,
        opiniao: "Regular"
    },
    {
        idade: 28,
        opiniao: "Regular"
    },
    {
        idade: 16,
        opiniao: "Ótimo"
    },
    {
        idade: 31,
        opiniao: "Ótimo"
    },
    {
        idade: 30,
        opiniao: "Regular"
    },
];

const filtro = (dados, tipo) => dados.filter((dado) => dado.opiniao === tipo);

const mediaPorOpiniao = (dados, tipo) => {
    const dadosFiltrados = filtro(dados, tipo);
    //const dadosFiltrados = dados.filter((dado) => dado.opiniao === "Ótimo");
    const totalIdade = dadosFiltrados.reduce((total, atual) => {
        return total + atual.idade;
    }, 0);

    return (`A media de idades das pessoas que classificaram como ${tipo} é: ${(totalIdade/dadosFiltrados.length).toFixed(2)}`);
};

console.log(mediaPorOpiniao(dados, 'Ótimo'));

const quantidadePorOpiniao = (dados, tipo) => {
    const dadosFiltrados = filtro(dados, tipo);
    return `A quantidade de pessoas que classificaram o filme como ${tipo} é: ${dadosFiltrados.length}`;
}
console.log(quantidadePorOpiniao(dados, 'Regular'));

const porcentagemPorOpiniao = (dados, tipo) => {
    const dadosFiltrados = filtro(dados, tipo);
    const porcentagem = (dadosFiltrados.length/dados.length)
    return (`A porcentagem de pessoas que consideraram o filme ${tipo} é ${(porcentagem *100).toFixed(2)}%`);
}
console.log(porcentagemPorOpiniao(dados, 'Bom'));



