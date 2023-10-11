/**
 * obj = {
 *  propriedade : valor
 * }
 */
let carro = {
    modelo : 'Megane Grand Tour Privilege',
    ano : 2009,
    cor : 'Bege',
    registro : {
        chassi :    'AUDR3YH0LL4ND3R',
        placa : 'MMM-2C20',
        renavam : '12345678900'
    }
}

// console.log(carro);
// console.log(carro.modelo);
// console.log(carro.registro);
// console.log(carro.registro.placa);

let carros = [
    carro
]

//console.log(carros);

carros.push(
    {
        modelo : 'Porsche Carrera',
        ano : 2007,
        cor : 'Laranja',
        registro : {
            chassi :    'AUDR3YH0LL4ND3R',
            placa : 'MMM-2C20',
            renavam : '12345678900'
        }
    }
)

console.log(carros)