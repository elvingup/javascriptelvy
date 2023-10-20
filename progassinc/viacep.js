const viacep = (cep) => {
    return new Promise((resolve, reject) => {
        //https://viacep.com.br/ws/01001000/json/
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(function(res){
                if(!res.erro){
                    resolve(res)
                }else{
                    reject(new Error("CEP não encontrado"))
                } 

            })

    })
}

viacep('88311120')
    .then(res => console.log(res))
        .catch(erro => console.log(erro.message))
