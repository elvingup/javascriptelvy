// programação funcional

// map
// let dados = [3,4,6,6];

// let dadosNovo = dados.map(function(element){ return element * 3});
// console.log(dadosNovo);

// function calcula (e){
//     return element*3;
// }
// let outrosDados = dados.map(calcula);
// console.log(outrosDados);

//filter com array
// let dados = [6,88,157,25];
// let resultado = dados.filter(function(d){
//     return d > 50;
// })
// console.log(resultado);

//filter com objeto de array
// let pessoas = [
//     {
//         nome:'elvy',
//         idade: 45
//     },
//     {
//         nome:'mia k',
//         idade: 18
//     },
//     {
//         nome:'sasha g',
//         idade: 18
//     }
// ]
// let resultado = pessoas.filter((pessoa)=>{
//         return pessoa.idade>=18;
//     }
// )
// console.log(resultado);

// reduce
let numeros = [10,20,30]
let resultado = numeros.reduce(function(total,numero){
    console.log(total);
    return(total + numero)
}) / numeros.length
console.log(resultado);