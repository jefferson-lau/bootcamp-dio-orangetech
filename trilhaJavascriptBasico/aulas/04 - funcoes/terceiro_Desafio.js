/*
2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma
indicação sobre a condição de peso de uma pessoa adulta.


Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com
a tabela abaixo.

IMC em adultos condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso Normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade Grave;



REFATORAR O EXERCICIO USANDO FUNÇÕES ; 
*/


//=======================================================================
// function calcularImc(peso, altura){
//     return peso / Math.pow(altura, 2);

// }
// const peso = 72;
// const altura = 1.64;
// const imc = calcularImc(peso, altura);

// console.log(imc);


// if (imc < 18.5) {
//     console.log('Abaixo do peso');
// } else if (imc >= 18.5 && imc < 25) {    //&& significa E
//     console.log('Peso Normal');
// } else if (imc >= 25 && imc < 30) {
//     console.log('Acima do peso');
// } else if (imc >= 30 && imc < 40) {
//     console.log('Obeso');
// } else if (imc > 40)
//     console.log('Obesidade Grave');

//=======================================================================

// function calcularImc(peso, altura) {
//     return peso / Math.pow(altura, 2);

// }

// function classificarImc(imc) {
//     if (imc < 18.5) {
//         return 'Abaixo do peso';
//     } else if (imc >= 18.5 && imc < 25) {    //&& significa E
//         return 'Peso Normal';
//     } else if (imc >= 25 && imc < 30) {
//         return 'Acima do peso';
//     } else if (imc >= 30 && imc < 40) {
//         return 'Obeso';
//     } else if (imc > 40)
//         return 'Obesidade Grave';

// }


// function main() {
//     const peso = 96;
//     const altura = 1.74;


//     const imc = calcularImc(peso, altura);
//     console.log(classificarImc(imc));
// }

// main();

//=======================================================================

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);

}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {    //&& significa E
        return 'Peso Normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else if (imc > 40)
        return 'Obesidade Grave';

}


(function main() {
    const peso = 96;
    const altura = 1.74;


    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();

// main = function(){
//     console.log(1);
// })();


// main();