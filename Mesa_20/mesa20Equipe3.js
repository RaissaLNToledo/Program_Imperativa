//Equipe 3
/* Integrantes:
Bruno dos Santos Souza
Jardel Pereira
Larissa Resende
Raíssa da Luz Nogueira de Toledo
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

    return {tipo: tipo, media: totalIdade/dadosFiltrados.length};
};

console.log(`A media de idades das pessoas que classificaram como ${mediaPorOpiniao(dados, 'Ótimo').tipo} é ${(mediaPorOpiniao(dados, 'Ótimo').media.toFixed(2))}`);

const quantidadePorOpiniao = (dados, tipo) => {
    const dadosFiltrados = filtro(dados, tipo);
    const resultado = {tipo: tipo, quantidade: dadosFiltrados.length}
    return resultado;
}
console.log(`A quantidade de pessoas que classificaram o filme como ${quantidadePorOpiniao(dados, 'Regular').tipo} é: ${quantidadePorOpiniao(dados, 'Regular').quantidade}`);

const porcentagemPorOpiniao = (dados, tipo) => {
    const dadosFiltrados = filtro(dados, tipo);
    const porcentagem = (dadosFiltrados.length/dados.length)
    return {tipo: tipo, porcentagem: porcentagem*100};
}
console.log(`A porcentagem de pessoas que consideraram o filme ${porcentagemPorOpiniao(dados, 'Bom').tipo} é ${porcentagemPorOpiniao(dados, 'Bom').porcentagem.toFixed(2)}%`);


