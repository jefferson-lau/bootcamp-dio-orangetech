

//const { gets, print } = require('./funcoes-auxiliares');    //Importando vai vim objeto que tem funcoes get e print


/*
 Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
 Faca um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

 Dados de entrada:
 5
 50
 10
 98
 23

 Saida 98
 
 
 */

//print(gets());


//===================================================================

/*
const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
    // return entradas [i];
    const valor = entradas[i];
    i = i + 1;   // ou   i++
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print }
*/

//===================================================================

const entradas = [10, 5, 50, 10, 98, 23, 33, 44, 99, 1, 7];
let i = 0;

function gets() {
    // return entradas [i];
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print }