/*
3)  Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal
de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o
calculo adequado.

Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/



const precoEtiqueta = 100;
const formaDePagamento = '1';




if (formaDePagamento === '1') {
    const pagarDebito = precoEtiqueta - (precoEtiqueta * 0.10);
    console.log('Débito: R$ ' + pagarDebito);
} else if (formaDePagamento === '2') {
    const pagarDinheiroPix = precoEtiqueta - (precoEtiqueta * 0.15);
    console.log('Dinheiro ou PIX: R$ ' + pagarDinheiroPix);
} else if (formaDePagamento === '3') {
    console.log('Duas Vezes: R$ ' + precoEtiqueta);
} else if (formaDePagamento === '4') {
    const acimaDuasParcelas = precoEtiqueta + (precoEtiqueta * 0.10);
    console.log('Acima de duas vezes: R$ ' + acimaDuasParcelas);
}


