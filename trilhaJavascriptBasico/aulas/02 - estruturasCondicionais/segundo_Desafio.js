

/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
  *  1 - Preço do etanol;
  *  2 - Preço da gasolina;
  *  3 - O tipo do combustível que está no seu carro;
    4 - Gasto médio de combustível que está no seu carro;
    5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/




const precoEtanol = 3.54;
const precoGasolina = 5.79;
const tipoCombustivel = 'Etanol';

const kmPorLitros = 10;
const distanciaEmKM = 100;
const litrosConsumidos = distanciaEmKM / kmPorLitros;



if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}


//console.log(valorGasto.toFixed(2));
// console.log(litrosConsumidos);
