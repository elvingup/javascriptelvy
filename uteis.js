const prompt = require('prompt-sync')();

//funcoes de agendamento


// executa uma vez após atingir o tempo
// setTimeout(function(){
//     console.log("QUASE NO FIM DA AULA")
// }, 4000);

// setTimeout(frase, 2000);

// function frase(){
//     console.log("exemplo com funcao por fora")
// }

// setInterval - executa repetitidamente quando atinge o tempo
//      Control+C interrompe
// setInterval(function(){
//     console.log("REPETE AO INTERVALO")
// }, 3000)

// FUNÇÕES DE STRING
// length - pega o tamanho da string
let str = "Qual o tamanho da minha string";
console.log(str.length);
// indexof - procurar a ocorrencia de um pedaço de string, caractere de string
console.log(str.indexOf("tamanho"));
//slice - corta uma string
console.log(str.slice(0,6));
// tolowercase - transforma a string em letras minusculas
console.log(str.toLowerCase());
// touppercase - converte tudo para maiusculo
console.log(str.toUpperCase());
// replace - troca uma ocorrencia da string
console.log(str.replace("da minha string", "do meu texto"));

//-------------METODOS PARA TRATAMENTO DE NUMEROS
// parseint - converte um numero em formato de string para numerico
let numero = parseInt('200');
let numero2 = parseInt('100');
let numero3= parseInt(prompt('nº '));
let numero4= prompt('nº ');
numero4 = parseInt(numero4);
console.log(numero + numero2);

//parsefloat - converte numero string para float
let n1 = '200.85';
let n2 = '387.99';
console.log(parseFloat(n1) + parseFloat(n2));

// to fixed - limita o numero de casas decimais
let n3 = 11.852096374;
console.log(n3.toFixed(3));

//toprecision
console.log(n3.toPrecision(2));

// tostring - converte dados par string
let n4 = 55+99;
console.log(n4);
console.log(n4.toString());
console.log(typeof(n4));
n4=n4.toString();
console.log(typeof(n4));


