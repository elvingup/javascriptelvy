/**
 * EXERCÍCIO AULA 1
 *  
 *  Crie um algorítimo para armazenar dados de locação de um veículo.
 * 
 */

let prompt = require('prompt-sync')();

let precodia; let dias; let comb; let km;

let planodias; let planokm;

let modelo; let ano; let cor; let placa; let renavam; let chassi;

let veiculos = [];

console.log(`
    § -_-_-_-_- * L * O * C * A * R * -_-_-_-_- §
        
            CADASTRE OS VEÍCULOS LOCADOS:       
`);

let descontoPlanokm = prompt("O Plano por Quilometragem tem um desconto no preço da diária. Informe a porcentagem do desconto: ");
let taxaCombPlanokm = prompt("O Plano por Quilometragem cobra uma taxa sobre o preço do litro do combustível. Informe a porcentagem cobrada sobre o combustível: ");
if (descontoPlanokm >= 0 && taxaCombPlanokm >= 0) {
    let qtdCadastro = prompt("Determine a quantidade de veículos a serem cadastrados: ");

    do {
        modelo = prompt("Modelo: ");
        ano = prompt("Ano: ");
        cor = prompt("Cor: ");
        placa = prompt("Placa: ");
        renavam = prompt("Renavam: ");
        chassi = prompt("Chassi: ")
        precodia = prompt("Preço da diária: R$ ");
        dias = prompt("Quantidade de dias: ");
        km = prompt("Quantidade de quilômetros a serem percorridos: ");
        comb = prompt("Preço do litro do combustível: R$ ");

        (() => {
            planodias = precodia * dias;
            return planodias = planodias.toFixed(2);
        })();

        (() => {
            planokm = ((precodia * (descontoPlanokm / 100)) * dias) + ((comb * (taxaCombPlanokm / 100)) * km);
            return planokm = planokm.toFixed(2);
        })();

        veiculos.push({
            modelo: modelo,
            ano: ano,
            cor: cor,
            registro: {
                placa: placa,
                renavam: renavam,
                chassi: chassi
            },
            locacao: {
                precodia: precodia,
                dias: dias,
                km: km,
                comb: comb,
                planodias: planodias,
                planokm: planokm
            }
        })

    } while (veiculos.length < qtdCadastro);
}

for (v in veiculos) {
    console.log(`
        § ------- * L * O * C * A * R * ------- §
           impressiona qualquer maria-gasolina
        § ---  CADASTRO DE LOCAÇÃO VEICULAR --- §
        Modelo: ${veiculos[v].modelo}
        Ano: ${veiculos[v].ano}
        Cor: ${veiculos[v].cor}
        Placa: ${veiculos[v].registro.placa}
        Renavam: ${veiculos[v].registro.renavam}
        Chassi: ${veiculos[v].registro.chassi}
        Plano de Locação por Diárias - Valor: R$ ${veiculos[v].locacao.planodias}
        Plano de Locação por Quilometragem - Valor: R$ ${veiculos[v].locacao.planokm}
        § ----------------------------------------------------------------------- §
    `);
};