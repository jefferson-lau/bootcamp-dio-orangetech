
//PARTE 1
/* const { gets, print } = require('./exercicio1_importacao.js'); 

 print(gets());
 print(gets());
 print(gets());
 print(gets());
 print(gets());
 print(gets());*/

//=================================================================================

//PARTE 2
/*const { gets, print } = require('./exercicio1_importacao.js');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);

}
//print(numerosSorteados);

let maiorValor = 0 ;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);
*/

//=================================================================================

//PARTE 3
/*const { gets, print } = require('./exercicio1_importacao.js');

//const numerosSorteados = [];
let maiorValorEncontrado = 0 ;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    //numerosSorteados.push(numeroSorteado);
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}
//print(numerosSorteados);

/*let maiorValor = 0 ;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValorEncontrado);
*/

//===========================================================================


//PARTE 4
const { gets, print } = require('./exercicio1_importacao.js');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0 ;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);
