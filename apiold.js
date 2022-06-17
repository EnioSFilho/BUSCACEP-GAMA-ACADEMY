const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector('#rua');
const inputComplemento = document.querySelector('#complemento');
const inputBairro = document.querySelector('#bairro');
const inputUF = document.querySelector('#UF')

const BASE_URL = 'https://brasilapi.com.br/api'

inputCep.onkeyup = async (evento) => {
// VERIFICANDO SE O CEP CUMPRIU OS 7 DIGITOS
if (inputCep.value.length < 8){

    return;

}
// FAZENDO UMA REQUISICAO A API BRASILAPI PARA BUSCAS AS INFORMACOS COM O CEP DIGITADO
const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {

    method: "GET",

});

// extraindo o jsason da resposta
const conteudoResposta = await resposta.json();

inputRua.value = conteudoResposta.street;
inputBairro.value = conteudoResposta.neighborhood;
inputUF.value = conteudoResposta.state;
inputComplemento.value = conteudoResposta.city;

console.log(conteudoResposta);
alert("cep completo" + inputCep.value);
};

