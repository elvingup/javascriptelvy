/**
 * exercicio 1
 * fazer o consumo da api https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json
use promise
 */
const consulta = () => {
    return new Promise((resolve, reject) => {
        //consultando api
        fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
            .then(res => res.json())
            .then(function(res) {
                if(res){
                    resolve(res)
                }else{
                    reject(new Error("deu caca"))
                }
            })
    })
}

//chamando a função
/* consulta()
    .then(resultado => console.log(resultado))
    .catch(err => console.log(err.message)) */

/**
 * exercicio 2
 * fazer uma promise para calcular media de notas de um aluno
passe como parametro 3 notas, se a média for 7 > resolve como aprovado senão reject como reprovado
 */

const media = (n1, n2, n3) => {
    return new Promise((resolve, reject) => {
        let media = (n1 + n2 + n3) / 3
        if(media >= 7){
            resolve('aprovado')
        }else{
            reject(new Error("Vai estudar caraio"))
        }
    })
}
//usando a funcão
/* media(5,5,8)
    .then(res => console.log(res))
    .catch(err => console.log(err.message)) */

/**
 * exercicio 3
 * faça uma promisse que verifique se a idade informada corresponde ao ano de nascimento informado
ex 1985 - 38 anos
 */

const confereInfo = (ano, idade) => {
    return new Promise((resolve, reject) => {
        let date = new Date()
        let calculo = date.getFullYear() - ano;
        if(calculo == idade){
            resolve("Correto")
        }else{
            reject(new Error("vai mentir noutro lugar jacaré"))
        }
    })
}

//usando 
confereInfo(1985, 20)
    .then(res => console.log(res))
    .catch(err => console.log(err.message))