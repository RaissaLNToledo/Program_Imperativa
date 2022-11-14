//Aluna: Raíssa da Luz Nogueira de Toledo

//Exercício 1 - Ações mais comuns
let acessarElementosPosicao = (array, posicao) => array[posicao];
let acessarElementos = (array, elemento) => array.filter((item) => item == elemento);

let meses = ['Janeiro', 'Janeiro', 'Março', 'Abril', 'Maio'];
//Modificar elemento
meses.splice(1, 1, 'Fevereiro');
console.log(meses);

//Adicionar elemento
meses.push('Junho');
meses.unshift('Janeiro');
meses.splice(3, 0, 'Agosto');
console.log(meses);

//Eliminar elemento
let index = meses.indexOf('Agosto');
meses.splice(index, 1);
meses.shift();
meses.pop();
console.log(meses);

/* Exercícío 2 - sem rodar
1- let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])

Retorna -> 5 (comprimento do array)

2- let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])

Retorna -> "Harry"

3- let str = "uma string qualquer”
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])

Retorna -> true (penultimo item da ultima lista)
*/

// Exercício 3
//Função Imprimir inverso
let imprimirInverso = function(lista) {
    let tamanhoLista = lista.length;
    lista.forEach(element => {
        console.log(lista[tamanhoLista -1]);
        tamanhoLista = tamanhoLista -1;
    });
}

//Função inverter 
let inverter = function(lista){
    let inverso = []
    lista.forEach(element => inverso.unshift(element))
    console.log(inverso);
}

//Função Soma Array
let somaArray = function(lista){
    let soma = 0;
    lista.forEach(element => soma = soma + element);
    console.log(soma)
}

//Simulação Array.join()
let join = function(lista){
    let palavra = '';
    lista.forEach(item => palavra = palavra+item);
    console.log(palavra);
}

//Coleção de filmes
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


