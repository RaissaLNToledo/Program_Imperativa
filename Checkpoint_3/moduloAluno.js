// Checkpoint 3
// Aluna: Raíssa da Luz Nogueira de Toledo

let aluno = {
    nome: "",
    quantidadeDeFaltas: 0,
    notas: []
};
class Aluno_cl {
    //construtor
    constructor (nome, faltas, notas) {
        this.nome = nome;
        this.quantidadeDeFaltas = faltas;
        this.notas = notas;
    }
    // Método
    calcularMedia = function(notas) {
        return notas.reduce((total, atual) => {
            return total + atual;
        }, 0)/notas.length};
    
    adicionarFalta = function(faltas) {
        return ++faltas;};
    
    get media() {
        return this.calcularMedia(this.notas);
    }

    get maisFalta() {
        return this.adicionarFalta(this.quantidadeDeFaltas);
    }
};

module.exports = {Aluno_cl};