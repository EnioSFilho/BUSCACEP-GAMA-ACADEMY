const BASE_URL = 'https://xp41-produto-api.herokuapp.com';

const inputNome = document.getElementById('nome');
const inputDescricao = document.getElementById('descricao');
const inputLink = document.getElementById('imagem');
const inputPreco = document.getElementById('preco');

const form = document.getElementById('cadastrar')

form.onsubmit = async (evento) => {

    evento.preventDefault()

    const produto = {

    name: inputNome.value,
    poster: inputLink.value ,
    description: inputDescricao.value,
    price: inputPreco.value
    }

    const config = {
        method: "POST",
        body: JSON.stringify(produto),
        headers:{
            'Content-Type' : 'application/json'
        },
        redirect: 'follow'
    }

    await fetch(`${BASE_URL}/produtos`, config)

    alert('produto cadastrado com sucesso !')
    
}