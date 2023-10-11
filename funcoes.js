//funcao é um bloco de codigo com a tarefa de executar uma ou mais funcoes

// metodologia SOLID

// // funcao declaration
//     // palavra function - obrigatorio
//     // nomeFuncao - obrigatorio
//     // () - obrigatorio
//     // { corpo da função } - obrigatorio
//     // (parametros) - paramentros são opcionais
//     function imprimeNome(){
//         console.log(`Elvy S`);
//     }
//     // chamar a função
//     //imprimeNome();

//     function imprimeNome(nome, sobrenome = 'sem sobrenome'){
//         console.log(`
//         ${nome} ${sobrenome}
//         `);
//     }
//     // chamar a função
//     imprimeNome(
//         'Elvy', 'S'
//     );

// -------- FUNÇÕES DE EXPRESSÃO OU EXPRESSION
    /*
    declaracao com variavel ou constante - obrigatorio
        = function - obrigatorio
        () - obrigatorio
        {} - obrigatorio
    */
// let minhaFuncao = function(){
//     console.log('elvy');
// }
// minhaFuncao();

// ---------------------- ARROW FUNCTION
/*
    => é igual a function
    () obrigatorio
    {} obrigatorio
*/
// let flecha = (parametro) => {
//     console.log('teste');
//     console.log(parametro);
// }

// flecha('param imprime elvy');

// -------------------------- FUNÇÃO ANONIMA
    /*

    */
    (function(){
        console.log('ola mundo');
    })();

    (() => {
        console.log('FLECHA')
    })();
