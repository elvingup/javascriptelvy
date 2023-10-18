let data = new Date();
// new é uma palavra reservada para instanciar objetos.
// let calc = new Math();
// let mapa = new Map();
// let objeto = new Object();

// https://www.w3schools.com/js/js_date_methods.asp 

// console.log(data);

// console.log(data.getDate());
// console.log(data.getDay());
// console.log(data.getTime());

let dias = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
]

let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

let extenso = `${dias[data.getDay()]}, ${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}`;

console.log(extenso);

// DATA DE NASCIMENTO
let dn = new Date('1978-06-11');
let dnExtenso = `${dias[dn.getDay()]}, ${dn.getDate()} de ${meses[dn.getMonth()]} de ${dn.getFullYear()}`;
console.log('Data de Nascimento: '+dnExtenso);

// DATA DE NASCIMENTO COM ADIÇÃO AO ÍNDICE
let dnn = new Date('1978-06-11');
let dnnExtenso = `${dias[dnn.getDay()]}, ${1+dnn.getDate()} de ${meses[dnn.getMonth()]} de ${dnn.getFullYear()}`;
console.log('Data de Nascimento: '+dnnExtenso);