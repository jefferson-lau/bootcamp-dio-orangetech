// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

/*
let resultado = gets();
print(fizzBuzz(resultado));
*/

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.


//=============================================================================



// let resultado = gets();
// const numeros = [3, 5, 15, 4];

// function fizzBuzz(numeros){
//     for (let i = 0; i < numeros.length; i++) {
//         const numero = numeros[i];
//         if (i % 3 === 0 && i % 5 === 0) {
//             print("FizzBuzz");
//         } else if (i % 3 === 0) {
//             print("Fizz");
//         } else if (i % 5 === 0) {
//             print("Buzz");
//         } else if (i % 5 === 0) {
//             print(4);
//         }
// }

// }

// print(fizzBuzz(resultado));








//=========================================================================

let resultado = gets();


const numeros = [3, 5, 15, 4];


function fizzBuzz(resultado) {
    if (resultado % 3 === 0 && resultado % 5 === 0) {
        return "FizzBuzz";
    } else if (resultado % 3 === 0) {
        return "Fizz";
    } else if (resultado % 5 === 0) {
        return "Buzz";
    } else {
        return resultado;
    }
} 

print(fizzBuzz(resultado));





