/*
ARMAZENAMENTO DE INFORMAÇÕES NO NAVEGADOR
    1.  cookies : armazena uma string de informações
    2.  localStorage
    3.  sessionStorage
*/


// Usando cookie : armazena uma string de informações
    document.cookie = "usuarioLogado=true";

    console.log(document.cookie);

    let cookies = document.cookie.split(';');
    console.log(cookies);

// localStorage : validade infinita
    /*
        setItem : seta um item , grava um item
        getItem : traz um item gravado
    */
    localStorage.setItem("usuario", "Elvy");
    localStorage.setItem("usuario",{
        nome: "Elvy",
        user:"elvingup",
        ultimoAcesso:"2023-10-16"
    });
    localStorage.setItem("usuario", JSON.stringify{
        nome: "Elvy",
        user:"elvingup",
        ultimoAcesso:"2023-10-16"
    });
    console.log(localStorage.getItem("usuario"));

// sessionStorage : tem validade enquanto o navegador estiver aberto
    sessionStorage.setItem();
    sessionStorage.getItem();
