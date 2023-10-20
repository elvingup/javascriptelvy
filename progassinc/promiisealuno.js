/*
    fazer uma promise para calcular media de notas de um aluno
passe como parametro 3 notas, se a média for 7 > resolve como aprovado senão reject como reprovado

calcular
resolve imprime aprovado
reject imprime reprovado
*/

let media = function(){
    notas = (6*3)/3;
    new Promise((resolve, reject)=>{
        if (notas>=7){
            resolve(console.log('APROVADO'));
        }else{
            reject(console.log('REPROVADO'));
        }
    })
}

media()
.then()    
.catch(erro => console.log(erro.message));
