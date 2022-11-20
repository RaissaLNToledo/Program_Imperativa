// Grupo 3
// Integrantes:
// Raíssa da Luz Nogueira de Toledo
// Robson Assunes dos Reis


let encontrarGanhador = function(a, b){
    let pontosA = 0;
    let pontosB = 0;


    //Verifica quantos pontos cada um tem
    for (let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            pontosA++;
        }
        else if(a[i] < b[i]){
            pontosB++;
        }
    }

    //Verificar quem ganhou
    if(pontosA > pontosB){
        let ganhador = 'Primeiro Participante';
        return ganhador;
    }
    else if (pontosA < pontosB){
        let ganhador = 'Segundo Participante';
        return ganhador;
    }
    else{
        let ganhador = 'Empate';
        return ganhador;
    }

}

const Alicia = [23, 69, 32];
const Bob = [12, 67, 43]

console.log(`O ganhador é: ${encontrarGanhador(Alicia, Bob)}`)

//Extra
let digitalHouse = function(a, b){
    for(let i = 1; i <= 100; i++){
        if(i % a === 0 && i % b !== 0){
            console.log("Digital");
        }
        else if (i % a !==0 && i % b ===0){
            console.log("House");
        }
        else if (i % a ===0 && i % b ===0){
            console.log("Digital House");
        }
        else {
            console.log(i);
        }
    }
}

console.log('------------------');
console.log('Exercício Extra - Função Digital House')
digitalHouse(2, 3);

let somaArray = function(a){
    let soma = 0;
    for(let i = 0; i < a.length; i++){
        soma = soma+a[i];
    }
    return soma
}

let simulaJoin = function(a){
    let soma = '';
    a.forEach(item => {
        soma = soma + item;
    });
    return soma
}

const lista = [5, 100, 200];
console.log('------------------');
console.log('Exercicio Extra - Função somaArray');
console.log(somaArray(lista));
const texto = ["t", "c", "h", "a", "u"];
console.log('------------------');
console.log('Exercicio Extra - Função simulaJoin');
console.log(simulaJoin(texto));
