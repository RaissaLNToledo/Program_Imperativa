//Grupo 01
//Integrantes:
//Larissa Resende
//Raíssa Toledo
//Ronaldo Silva
//Tamires Sousa

//Questão 1

/* A forma mais fácil de armazenar os dados é por meio de objetos literais que tenham como propriedades os dados que precisam ser armazenados. */

//Questão 2
let contaTeste = {
    numeroConta: 11111,
    contaCorrente: true,
    saldo: 0.00,
    titular: 'Teste'
}

//Questão 3
function contaBancaria(numero, tipo, saldo, nome){
    this.numeroConta = numero;
    this.contaCorrente = tipo;
    this.saldo = saldo;
    this.titular = nome;
}

let conta1 = new contaBancaria(5486273622, true, 27771, 'Abigael Natte');
let conta2 = new contaBancaria(1183971869, false, 8675, 'Ramon Connell');
let conta3 = new contaBancaria(9582019689, false, 27363, 'Jarret Lafuente');
let conta4 = new contaBancaria(1761924656, false, 32415, 'Ansel Ardley');
let conta5 = new contaBancaria(7401971607, false, 18789, 'Jacki Shurmer');
let conta6 = new contaBancaria(630841470, true, 28776, 'Jobi Mawtus');
let conta7 = new contaBancaria(4223508636, true, 2177, 'Thomasin Latour');
let conta8 = new contaBancaria(185979521, false, 25994, 'Lonnie Verheijden');
let conta9 = new contaBancaria(3151956165, true, 7601, 'Alonso Wannan');
let conta10 = new contaBancaria(2138105881, false, 33196, 'Bendite Huggett');

let listaClientes = [conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9, conta10];

let banco = {
    cliente: listaClientes,
    consultarCliente: function(nome){
        let objeto;
        listaClientes.forEach(function(item){
            if(item.titular == nome){
                objeto = item;
            }});
        return objeto;
    },
    deposito: function(nome, quantia){
        let contaDeposito = banco.consultarCliente(nome);
        contaDeposito.saldo += quantia;
        return `Depósito realizado! Seu novo saldo é ${contaDeposito.saldo}`;
    },
    saque: function(nome, quantia){
        let contaSaque = banco.consultarCliente(nome);
        if(contaSaque.saldo >= quantia){
            contaSaque.saldo -= quantia;
            return `Extração feita com sucesso! Seu novo saldo é ${contaSaque.saldo}`;
        }
        else{
            return `Fundos insuficientes`
        }
    },
}


console.log(banco.consultarCliente('Abigael Natte'));
console.log(banco.deposito('Abigael Natte', 20));
console.log(banco.saque('Abigael Natte', 20));
console.log(banco.saque('Abigael Natte', 30000));

//Extra - Propriedade Unica
let propriedadeUnica = function(array, str){
    let novoArray = [];
    array.forEach(element => novoArray.push(element[str]));
    return novoArray
}

console.log(propriedadeUnica(listaClientes, "saldo"));


