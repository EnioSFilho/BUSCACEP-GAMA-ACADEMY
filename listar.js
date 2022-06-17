// const BASE_URL = "https://xp41-produto-api.herokuapp.com"
const inputId = document.getElementById('id')
const inputNomel = document.getElementById('nomel')
const inputDescricaol = document.getElementById('descricaol')
const inputPrecol = document.getElementById('precol')

// const form = document.getElementById("listar")

inputId.onkeyup = async (evento) => {
    // VERIFICANDO SE O CEP CUMPRIU OS 7 DIGITOS
    if (inputId.value.length < 24){
    
        return;
    
    }
    // FAZENDO UMA REQUISICAO A API BRASILAPI PARA BUSCAS AS INFORMACOS COM O CEP DIGITADO
    const resposta = await fetch(`${BASE_URL}/produtos/${inputId.value}`, {
    
        method: "GET",
    
    });
    
    // extraindo o jsason da resposta
    const conteudoResposta = await resposta.json();
    
    inputNomel.value = conteudoResposta.name;
    inputDescricaol.value = conteudoResposta.description;
    inputPrecol.value = conteudoResposta.price;
    
    
    
    };
    
    