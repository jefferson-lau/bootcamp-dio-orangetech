

/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas dever ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de algura e peça ao José para
    dizer o valor do seu IMC.
*/

/*
(PARTE 1)

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }


    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose.calcularIMC().toFixed(2));


const robson = new Pessoa('Robson', 98, 1.55);
console.log('Robson tem: ' + robson.calcularIMC().toFixed(2) + ' IMC');

const vitor = new Pessoa('Vitor', 60, 1.69);
console.log(vitor.calcularIMC());
*/

//(PARTE 2)
//Classificar IMC
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }


    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

    classficarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {    //&& significa E
            return ('Peso Normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        } else if (imc > 40)
            return ('Obesidade Grave');
    }
}



const jose = new Pessoa('Jose', 100, 1.75);
console.log(jose.classficarIMC());

const vitor = new Pessoa('Vitor', 60, 1.69);
console.log(vitor.classficarIMC());



