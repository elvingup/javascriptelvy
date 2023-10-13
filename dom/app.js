// eventos -> click, hover, submit, oumouseout, keydown, keyup, keypress, onchange, onload

// para usar eventos, precisa usar um gerenciador de eventos; método chamad addEventListener

// const botao = document.querySelector('button')

// const joia = document.querySelector('#joia')

// botao.addEventListener('click', function(){
//     // alert('o botao foi clicado')
//     botao.innerHTML = 'CERVEJA JÁ'
//     joia.innerHTML = '<img src="https://ezbrew.com.br/wp-content/uploads/2021/09/tasty-american-beer-arrangement-708x1024.jpg">'

// })

// enviar dados do formulario
const formulario = document.querySelector('form')
const container = document.querySelector('.container');

// formulario.addEventListener('submit',
//     function(){
//         let nome = formulario.nome.value;
//         let idade = formulario.idade.value;

//         container.innerHTML = ` 
//             <h1>${nome}</h1>
//             <p>${idade}</p>
//         `
//     }
// )

formulario.addEventListener('submit',
    function(){
        let v1 = formulario.valor1.value
        let v2 = formulario.valor2.value;

        let resultado = parseFloat(v1) + parseFloat(v2);

        container.innerHTML = resultado;
    }
)