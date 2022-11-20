// Mesa aula 12 - versão individual
let comparacao = function(notasA, notasB){
    let pontosA = 0;
    let pontosB = 0;
    let arrayNotas = [];
    for(let i = 0; i < notasA.length; i++){
        if(notasA[i] > notasB[i]){
            pontosA++;
        }
        else if(notasA[i] < notasB[i]){
            pontosB++;
        }
    }
    arrayNotas.push(pontosA, pontosB);
    return arrayNotas;
}

let encontrarGanhador = function(participanteA, participanteB){
    let notasA = participanteA.notas;
    let notasB = participanteB.notas;
    let pontosCompetidores = comparacao(notasA, notasB);
    
    if(pontosCompetidores[0]>pontosCompetidores[1]){
        console.log(`O competidor ${participanteA.nome} com as notas ${notasA} ganhou com um total de ${pontosCompetidores[0]} pontos.`);
    }
    else if(pontosCompetidores[0]<pontosCompetidores[1]){
        console.log(`O competidor ${participanteB.nome} com as notas ${notasB} ganhou com um total de ${pontosCompetidores[1]} pontos.`);
    }
    else{
        console.log(`Houve um empate entre os competidores ${participanteA.nome} e ${participanteB.nome} com notas ${notasA} e ${notasB}, respectivamente com um total de ${pontosCompetidores[0]} ponto(s)`);
    }
}
let participantes = [
    {
        nome: 'Alice',
        notas: [53, 82, 46],
    },
    {
        nome: 'Bob',
        notas: [45, 8, 46],
    }
]

encontrarGanhador(participantes[0], participantes[1]);