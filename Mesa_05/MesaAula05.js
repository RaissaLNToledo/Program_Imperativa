//Integrantes da Mesa:
//Larissa Resende
//Raíssa Toledo

function conversor(polegada) {
    return polegada*2.54;
}
let centimentros = conversor(20);
console.log ("Função Conversor:", centimentros, ' cm');

function url(string) {
    return `http://www.${string}.com.br`;
}
console.log(url('funcaojs'));

function exclamacao(string) {
    return string + '!';
}
console.log(exclamacao('Aula de Programação Imperativa'));

function idadeCachorro(anos) {
    return anos*7;
}
console.log(idadeCachorro(5));

function ValorHoraTrabalhada(salario) {
    return salario/160;
}
console.log(ValorHoraTrabalhada(3000));

function calculadoraIMC(altura, peso) {
    return peso/altura**2
}

console.log(calculadoraIMC(160, 50));
console.log(calculadoraIMC(180, 100));

function maiuscula(texto) {
    return texto.toUpperCase();
}
console.log(maiuscula('palavra'));

function tipoDeDado(dado) {
    let tipoDeDado = typeof dado;
    return tipoDeDado;
}
console.log(tipoDeDado('palavra'));
console.log(tipoDeDado(10));

function circunferencia(raio) {
    let circunferencia = 2 * Math.PI * raio;
    return circunferencia;
}
console.log(circunferencia(5));