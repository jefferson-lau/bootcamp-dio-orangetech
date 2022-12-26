
//console.log('Sucesso!')

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//CALLBACK FUNCAO
//PROCESSAMENTO ASSINCRONO - NAO TEM RESPOSTA IMEDIATO ( PROMESSA DE RESULTADO )


//======================================================================================
/* 
fetch(url)  //REQUISICAO GET
    .then(function (response) { //RESULTADO DO PRIMEIRO THEN É ENCADEADO PARA O SEGUNDO THEN (FUNCAO DE TRANSFORMACAO)
        return response.json()
    response
        .json()
        .then(function(responseBody){
            console.log(responseBody)
        }) 
}) 
.then(function (jsonBody) {
    console.log(jsonBody)
})
.catch(function (error) { //Manipular o fracasso ou erro
    console.error(error)
}) 
.finally(function () {//Manipular independe erro ou do sucesso ou fracasso 
    console.log('Requisicao Concluída!')
})
*/


//======================================================================================
//PARTE 2 - ARROW FUNCTION (É UMA SINTAXE REDUZIDA DEFINICAO DE FUNCAO ) =>

/*
fetch(url)  //REQUISICAO GET
    .then((response) => { //RESULTADO DO PRIMEIRO THEN É ENCADEADO PARA O SEGUNDO THEN (FUNCAO DE TRANSFORMACAO)
        return response.json()
   /* response
        .json()
        .then(function(responseBody){
            console.log(responseBody)
        }) 
})
.then(function (jsonBody) {
    console.log(jsonBody)
})
.catch(function (error) { //Manipular o fracasso ou erro
    console.error(error)
}) 
.finally(function () {//Manipular independe erro ou do sucesso ou fracasso 
    console.log('Requisicao Concluída!')
})
*/

//======================================================================================

//PARTE 3 - ARROW FUNCTION (É UMA SINTAXE REDUZIDA DEFINICAO DE FUNCAO ) => 
fetch(url)  //REQUISICAO GET
    .then((response) => response.json())            //VERSAO REDUZIDA DA FUNCAO
    .then((jsonBody) => console.log(jsonBody))      //VERSAO REDUZIDA DA FUNCAO
    .catch((error) => console.error(error))
 
/*.finally(function () {//Manipular independe erro ou do sucesso ou fracasso 
    console.log('Requisicao Concluída!')
})
*/