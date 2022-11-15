//Aluna: Raíssa da Luz Nogueira de Toledo

//Exercício 1
let arrayFilmes = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];

let maiuscula = function(array){
    let arrayMaiuscula = []
    array.forEach(function(item){
        let maiuscula = item.toUpperCase();
        arrayMaiuscula.push(maiuscula);
    })
    console.log(arrayMaiuscula);
}
maiuscula(arrayFilmes);

let animacao = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

let elementoEliminado = animacao.pop()

let adicionarArray = function(arrayBase, arrayAdicionada){
    arrayAdicionada.forEach(item => {
        arrayBase.push(item);
    });
    console.log(arrayBase);
}
adicionarArray(arrayFilmes, animacao);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
let comparacaoNotas = function(array1, array2){
    asiaScores.forEach(function(item){
        var index = asiaScores.indexOf(item);
        if (array1[index] == array2[index]){
            console.log(`As notas presentes na posição ${index} são iguais a ${array1[index]}`)}
        else {
            console.log(`As notas presentes na posição ${index} são diferentes. A nota da primeira lista é: ${array1[index]}. Já a nota da segunda lista é: ${array2[index]}`);
        }
    })
}
comparacaoNotas(asiaScores, euroScores);

//Concurso
console.log('Exercício Concurso:');
const notasParticipanteA = [5, 8, 4, 9, 5];
const notasParticipanteB = [8, 7, 8, 6, 8];
const notasParticipanteC = [7, 5, 10, 8, 3];

let identificarParticipante = function(participante){
    let nota = [];
    if(participante == 'A'){
        nota = notasParticipanteA;
    }
    else if(participante == 'B'){
        nota = notasParticipanteB;
    }
    else if(participante == 'C'){
        nota = notasParticipanteC;
    }
    return nota;
}

let pontuacaoMedia = function(participante){
    let soma = 0;
    let nota = identificarParticipante(participante);
    for(let i=0; i < nota.length; i++){
        soma = soma + nota[i];
    }
    let media = soma/(nota.length);
    return media;
}

let pontuacaoMaior = function(participante){
    let nota = identificarParticipante(participante);
    let maiorNota = 0;
    for(let i=0; i < nota.length; i++){
        if(nota[i] > maiorNota){
            maiorNota = nota[i];
        }
    }
    return maiorNota
}

let competicao = function(part1, part2, part3){
    let participantes = [part1, part2, part3]
    let media = [pontuacaoMedia(part1), pontuacaoMedia(part2), pontuacaoMedia(part3)];
    let maiorMedia = 0;
    for(let i=0; i < media.length; i++){
        if(media[i] > maiorMedia){
            maiorMedia = media[i];
        }
    }
    let ganhadorMedia = participantes[media.indexOf(maiorMedia)];
    console.log(`O vencedor da modalidade maior média é: ${ganhadorMedia} com a media de ${maiorMedia}`);
    
    let maioresNotas = [pontuacaoMaior(part1), pontuacaoMaior(part2), pontuacaoMaior(part3)];
    let maiorNota = 0;
    for(let i=0; i < maioresNotas.length; i++){
        if(maioresNotas[i] > maiorNota){
            maiorNota = maioresNotas[i];
        }
    }
    let ganhadorMaiorNota = participantes[maioresNotas.indexOf(maiorNota)];
    

    console.log(`O vencedor da modalidade maior nota é: ${ganhadorMaiorNota} com a nota de ${maiorNota}`);

}

competicao('B', 'C', 'A');