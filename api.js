// seleciona o id cep do html
const inputCep = document.getElementById('cep');
const inputRua = document.querySelector('#rua');
const inputComplemento = document.getElementById('complemento');
const inputBairro = document.getElementById('bairro');
const inputUf = document.getElementById('UF');
// puxar a informacao da api
const BASE_URL = 'https://brasilapi.com.br/api'

// adiciona um evento no id cep selecionado, nesse caso o comando onkeyup, para quando o usuario tirar o dedo da tecla, o sistema percerper
inputCep.onkeyup = async (evento) =>{

    if( inputCep.value.length < 8){
        return
    }

    // retorna uma promise, nesse caso precisamos tornar a funcao assincrona com o comando async. Dentro do fetch eu tenho que passar duas informacoes, uma string com o endpoint que eu quero acessar
    const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
        method: "GET",
    })

    const conteudoResposta = await resposta.json()
    console.log(conteudoResposta)
    alert('cep completo:')

    inputRua.value = conteudoResposta.street;
    inputComplemento.value = conteudoResposta.city
    inputBairro.value = conteudoResposta.neighborhood
    inputUf.value = conteudoResposta.state
}

// pode ser com addEventListener tambem conforme abaixo

// inputCep.addEventListener('keyup', () => {

//     alert('agora com advent listner')
// })