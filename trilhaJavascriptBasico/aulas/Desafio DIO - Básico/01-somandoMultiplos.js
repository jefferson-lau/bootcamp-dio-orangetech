// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 


/*
var a = parseInt(gets());
var N = parseInt(gets());

const entradas = [5, 20];
//let maiorValorEncontrado = 0;


if (a % N == 0 || N % a == 0) {
    print("Sao Multiplos");
        else {
        print("Nao sao Multiplos");
    }
}

print(maiorValorEncontrado);
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".



for (let i = 0; i < N; i++) {
    if (i % 3 === 0) {
        soma += i;
    }

}
*/


/*
var a = parseInt(gets(3));
var N = parseInt(gets(18));




function n(a) { 
    let somaMultiplos = 0; 
    for (i = 0; i <= a; i++) { 
        if (i % 3 === 0){
            somaMultiplos += i; 
        } 
    
    } 
}
console.log(somaMultiplos); 

*/


//========================================================================

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

var a = parseInt(gets());
var N = parseInt(gets());
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".







//========================================================================










//========================================================================
/*
(FUNCIONA)
var a = parseInt(gets(3));
var N = parseInt(gets(18));
 
var soma = 0;


for(let i=0; i<=N;i++){
    if((i%a)==0){
        soma+=i;
        
    }
}
print(soma);
*/

//========================================================================
//(TB FUNCIONA)
var a = parseInt(gets());
var N = parseInt(gets());
var soma = 0;
for (; a <= N; N--) {
  soma += (N % a === 0) ? N : 0;
}
print(soma);




