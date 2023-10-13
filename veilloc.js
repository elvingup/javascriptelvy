/**
 * EXERCÍCIO AULA 1
 *  
 *  Crie um algorítimo para armazenar dados de locação de um veículo.
 * 
 */

let prompt = require('prompt-sync')();

let precodia;
let dias;
let comb;
let km;
let planodias;
let planokm;

let veiculos = [];

function locdias(){
    planodias = precodia * dias;
    return planodias.toFixed(2);
}
function lockm(){
    planokm = ((precodia/2)*dias) + ((comb*0.1) * km); 
    return planokm.toFixed(2);
}

let qtdCadastro = prompt("Determine a quantidade de veículos a serem cadastrados: ");
do{ 
    let modelo = prompt("Modelo: ");
    let ano = prompt("Ano: ");
    let cor = prompt("Cor: ");
    let placa = prompt("Placa: ");
    let renavam = prompt("Renavam: ");
    let chassi = prompt("Chassi: ")
    precodia = prompt("Preço da diária: R$ ");
    dias = prompt("Quantidade de dias: ");
    km = prompt("Quantidade de quilômetros a serem percorridos: ");
    comb = prompt("Preço do litro do combustível: R$ ");

    locdias();
    let qtdias = planodias;

    lockm();
    let qtdkm = planokm;

    veiculos.push({
        modelo: modelo,
        ano: ano,
        cor: cor,
        registro:{            
            placa:placa,
            renavam:renavam,
            chassi:chassi
        },
        locacao: {
            precodia: precodia,
            dias: dias,
            km:km,
            comb:comb,
            qtdias: qtdias,
            qtdkm: qtdkm
        }
    })

} while (veiculos.length < qtdCadastro);

for( v in veiculos){
    console.log(`
        § ---- * L * O * C * A * R * ---- §
        impressiona qualquer maria-gasolina
        § --  CADASTRO DE LOCAÇÃO VEICULAR -- §
        Modelo: ${veiculos[v].modelo}
        Ano: ${veiculos[v].ano}
        Cor: ${veiculs[v].cor}
        Placa: ${veiculos[v].placa}
        Renavam: ${veiculos[v].renavam}
        Chassi: ${veiculos[v].chassi}
        Plano de Locação por Diárias - Valor: R$ ${veiculos[v].locacao.qtdias}
        Plano de Locação por Quilometragem - Valor: R$ ${veiculos[v].locacao.qtdkm}
        § ----------------------------------------------------------------------- §
    `);
}