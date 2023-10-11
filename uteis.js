//funcoes de agendamento


// executa uma vez após atingir o tempo
setTimeout(function(){
    console.log("QUASE NO FIM DA AULA")
}, 4000);

setTimeout(frase, 2000);

function frase(){
    console.log("exemplo com funcao por fora")
}

// setInterval - executa repetitidamente quando atinge o tempo
//      Control+C interrompe
setInterval(function(){
    console.log("REPETE AO INTERVALO")
}, 3000)