// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

//let n = parseInt(gets());

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

/*
function somatorio(n) {

    if (n === 0) {
        return 0;
    } else {
        return n + somatorio(x - 1);
    }

}

print(somatorio(10, 4, 15));


*/





//================================================================================


//let n = parseInt(gets());

//const n = '';

function somatorio(n) {

    if (n === 0) {
        return 0;
    } else {
        return n + somatorio(n - 1);
    }

}

print(somatorio(n));


//print(somatorio());












//================================================================================


/*

var soma = 0;

const numeros = [10, 4, 15];

function somatorio(n) {
    for (let i = 0; index < numeros.length; index++) {
        const element = array[index];

    }

}

*/