/**
 * USAMOS O ASYNC QUANDO PRECISAMOS QUE A PROMISSE SEJA RESOLVIDA PARA O CODIGO CONTINUAR
 */

const responda = async (mensagem) => new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(mensagem)
    }, 5000)
})

async function executaMensagem(){
    console.log("chamando primeira mensagem")

    const mensagemUm = await responda("esta é a primeira mensagem")
    console.log(mensagemUm)

    console.log("chamando mensagem dois");
    const mensagemDois = await responda("esta é segunda mensagem")
    console.log(mensagemDois);

    console.log("fim");
}

executaMensagem()