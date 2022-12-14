const {Aluno_cl} = require('./moduloAluno');

let ana = new Aluno_cl('Ana', 2, [10, 10, 9, 9]);
let joao = new Aluno_cl('João', 7, [10, 6, 4, 10]);
let lucas = new Aluno_cl('Lucas', 0, [8, 4, 6, 7]);
let marilia = new Aluno_cl('Marilia', 3, [8, 10, 10, 9]);
let antonio = new Aluno_cl('Antonio', 3, [8, 7, 7, 6]);
let listaEstudante = [ana, joao, lucas, marilia, antonio];

module.exports = {listaEstudante};