// Checkpoint 3
// Aluna: Raíssa da Luz Nogueira de Toledo

const {Aluno, listaAlunos} = require('./moduloAluno');

let novoAluno = new Aluno('Joaquim', 0, [8, 9, 10, 9]);

let curso = {
    nomeCurso: 'Javascript',
    notaAprovacao: 7,
    faltasMaxima: 3,
    listaAlunos,
    addAluno: function(aluno) {
        listaAlunos.push(aluno);
        return listaAlunos
    },
    aprovado: function(alunoNome) {
        let alunoEncontrado = listaAlunos.find((objeto) => objeto.nome === alunoNome);
        let resultado = ''
        if (!alunoEncontrado){
            return 'Aluno não encontrado';
        }
        else{
            let mediaAluno = alunoEncontrado.media;
            let faltasAluno = alunoEncontrado.quantidadeDeFaltas;
            if((faltasAluno < curso.faltasMaxima) && (mediaAluno >= curso.notaAprovacao)){
                resultado = true;
                return resultado;
            }
            else if ((faltasAluno === curso.faltasMaxima) && (mediaAluno >= (1.1*curso.notaAprovacao))){
                resultado = true;
                return resultado;
            }
            else{
                resultado = false;
                return resultado;
            }
        };
    },
    listaAprovados: function() {
        let resultado = []
        curso.listaAlunos.forEach((element) => {
            resultado.push(curso.aprovado(element.nome));
        })
        return resultado;
    }
};

// Testando a adição de um novo aluno:
curso.addAluno(novoAluno);
console.log(listaAlunos);

// Testando a aprovação dos alunos:
console.log(curso.aprovado('Ana')); //True
console.log(curso.aprovado('João')); // False
console.log(curso.aprovado('Antonio')); // False
console.log(curso.aprovado('Marilia')); // True
console.log(curso.aprovado('Lucas')); // False

//Testando a Lista de aprovados:
console.log(curso.listaAprovados());