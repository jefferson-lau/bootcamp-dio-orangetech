
//console.log('Sucesso!')

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


//PROCESSAMENTO ASSINCRONO - NAO TEM RESPOSTA IMEDIATO ( PROMESSA DE RESULTADO )
fetch(url)  //REQUISICAO GET
    .then(function (response) { 
    //console.log(response)
    response.json().then(function(responseBody){
        console.log(responseBody)
    }) 
}) 
.catch(function (error) { //Manipular o fracasso ou erro
    console.error(error)
}) 
.finally(function (error) {//Manipular independe erro ou do sucesso ou fracasso 
    console.log('Requisicao Concluída!')
})

//const x = 10+10
//console.log(x)

//=============================================================================
/*    Tratamento de erro (Semelhante fetch, then e finally)
try {
    
} catch (error) {
    
} finally{

}
*/