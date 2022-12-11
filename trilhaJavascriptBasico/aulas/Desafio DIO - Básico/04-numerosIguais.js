// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.



let A = gets();
let B = gets();

//TODO: Imprima se os valores numéricos passados são iguais ou não.
//const comparacao = '';


if (A === B) {
    comparacao = 'Sao iguais!' ; // A = 50 e B = 50 (Iguais)
} else if (A != B) {
    comparacao = 'Nao sao iguais!' ; // A = 1 e B = 2 (Nao sao iguais!)

}


print(comparacao);



//=======================================================================
/*
function compararValores(resultado) {
    if (A = B) {
        return "Sao iguais! "; // A = 50 e B = 50 (Iguais)
    } else {
        return "Nao sao iguais! " // A = 1 e B = 2 (Nao sao iguais!)

    }
}

print(compararValores(resultado));

*/
