// Equipe 2
//Larissa Resende
//Luiz Felipe Pinho
//Luiz Felipe Santana Jardim
//Nathan Soares
// Raíssa da Luz Nogueira de Toledo
//Wagner Yuri

const FizzBuzz = (primeiroValor, segundoValor) => {
    for(let i = 0; i <= 100; i++){
        if(i % primeiroValor == 0 && i%segundoValor == 0){
            console.log('FizzBuzz');
        }
        else if(i %primeiroValor == 0 && i%segundoValor !=0){
            console.log('Fizz');
        }
        else if(i%primeiroValor != 0 && i%segundoValor == 0){
            console.log('Buzz');
        }
        else{
            console.log(i);
        }
    }
}

FizzBuzz(2,3);

// Avançado
const multiplos = (primeiroValor, segundoValor, primeiraPalavra, segundaPalavra) => {
    for(let i = 0; i <= 100; i++){
        if(i % primeiroValor == 0 && i%segundoValor == 0){
            console.log(primeiraPalavra+' ' + segundaPalavra);
        }
        else if(i %primeiroValor == 0 && i%segundoValor !=0){
            console.log(primeiraPalavra);
        }
        else if(i%primeiroValor != 0 && i%segundoValor == 0){
            console.log(segundaPalavra);
        }
        else{
            console.log(i);
        }
    }
}
multiplos(2, 3, 'Digital', 'House');