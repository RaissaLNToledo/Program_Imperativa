let adicionar = (valor1, valor2) => valor1+valor2;

let subtracao = (valor1, valor2) => valor1-valor2;

let multiplicacao = (valor1, valor2) => valor1*valor2;

let divisao = (valor1, valor2) => valor1/valor2;

console.log ("-------------- Teste de Operações / Calculador --------------");

console.log(`Função Soma: ${adicionar(10, 20)}`);
console.log(`Função Subtração: ${subtracao(50, 18)}`);
console.log(`Função Multiplicação: ${multiplicacao(7, 49)}`);
console.log(`Função divisão: ${divisao(18, 3)}`);
console.log(`Testando zero no numerador: ${divisao(0, 8)}`);
console.log(`Testando zero no denominador: ${divisao(8, 0)}`);

let quadradoDoNumero = (valor1) => {
    let quadrado = multiplicacao(valor1, valor1);
    return quadrado;
}

let mediaDeTresNumeros = (valor1, valor2, valor3) => {
    let soma = adicionar(valor1, valor2);
    soma = adicionar(soma, valor3);
    let media = divisao(soma, 3);
    return media
}

let calculaPorcentagem = (total, porcentagem) => {
    let resultado = multiplicacao(total, porcentagem);
    resultado = divisao(resultado, 100);
    return resultado
}

let geradorDePorcentagem = (valor1, valor2) => {
    let resultado = divisao(valor1, valor2);
    resultado = multiplicacao(resultado, 100);
    return resultado
}

console.log(`O quadrado do numero 2 é: ${quadradoDoNumero(2)}`);

//Média dos 3 números
let primeiroNumero = 7;
let segundoNumero = 5;
let terceiroNumero = 8.5;
console.log(`Media dos números ${primeiroNumero}, ${segundoNumero}, ${terceiroNumero} é: ${mediaDeTresNumeros(primeiroNumero, segundoNumero, terceiroNumero)}`);

//Porcentagem
let total = 300;
let porcentagem = 15
console.log(`${porcentagem}% de ${total} é: ${calculaPorcentagem(total, porcentagem)}`);

let valor1 = 2;
let valor2 = 200;
console.log(`${valor1} corresponde a ${geradorDePorcentagem(2, 200)}% de ${valor2}`);