// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

/*

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = parseInt(gets());

*/

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.




//===============================================================================

/*
let busca = '';

for (i = 0; i < elementos.length; i++) {
    if (valor === elementos[i]) {
        const valor = entradas[i];
        //i = elementos.length;
        busca = valor + i;
        //i++;
        //return valor;
    } else {
        busca = valor;
    }

}

print(valor);
*/



//===============================================================================
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

let valor = parseInt(gets());

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

let busca = '';

for (let i = 0; i < elementos.length; i++) {
    const numero = elementos[i];
    if (numero === valor) {
        busca = 'Achei ' + valor + ' na posicao ' + i;
        i = elementos.length;
    } else {
        busca = 'Numero ' + valor + ' nao encontrado!';
    }
}

print(busca);





//===============================================================================

/*
O meu ficou assim, dá uma comparada no código, sempre me ajuda achar o erro quando vejo um outro que está funcionando.

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

let valor = parseInt(gets());

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

let busca = '';


for (var i = 0; i < elementos.length; i++) {
    const number = elementos[i];
    if (number === valor) {
        busca = 'Achei ' + valor + ' na posicao ' + i;
        i = elementos.length;
    } else {
        busca = 'Numero ' + valor + ' nao encontrado!';
    }
}
print(busca);

*/



