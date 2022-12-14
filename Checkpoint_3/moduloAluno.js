// Checkpoint 3
// Aluna: Raíssa da Luz Nogueira de Toledo

let aluno = {
    nome: "",
    quantidadeDeFaltas: 0,
    notas: []
};

function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.quantidadeDeFaltas = faltas;
    this.notas = notas;
    calcularMedia = function(notas) {
        return notas.reduce((total, atual) => {
            return total + atual;
        }, 0)/notas.length};
    this.media = calcularMedia(this.notas);
    adicionarFalta = function(faltas) {
        return ++faltas;};
};

let ana = new Aluno('Ana', 2, [10, 10, 9, 9]);
let joao = new Aluno('João', 7, [10, 6, 4, 10]);
let lucas = new Aluno('Lucas', 0, [8, 4, 6, 7]);
let marilia = new Aluno('Marilia', 3, [8, 10, 10, 9]);
let antonio = new Aluno('Antonio', 3, [8, 7, 7, 6]);
let listaAlunos = [ana, joao, lucas, marilia, antonio];

module.exports = {Aluno, listaAlunos};