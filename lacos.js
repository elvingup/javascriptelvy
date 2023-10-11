// for(let i=0; i<99; i++){
//     console.log(`Numero: ${i}`);
// }

// for(let i=0; i<99; i++){
//     console.log('nº '+i);
// }

// for in
    let dados = [
        'domingo',
        'segunda',
        'terça','quarta','quinta','sexta','sabado'
    ];
    for(dia in dados){
        console.log(dia);
        console.log(dados[dia]);
    }

    // for(let i=0; i< dados.length; i++){
    //     console.log(dados[i]);
    // }

// while / do-while
    let i=0;
    while(i<22){ `nº ${i}`; i++; }
    do{ `nº ${i}`; i++; }while(i<33)
