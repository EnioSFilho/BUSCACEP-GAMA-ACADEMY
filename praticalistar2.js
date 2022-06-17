const inputIdListar = document.getElementById('idListar');
const inputNomel = document.getElementById('nomel');
const inputDescricaol= document.getElementById('descricaol');
const inputPrecol = document.getElementById('precol')

const formListar = document.getElementById('listar');

formListar.onsubmit = async (evento) => {

    evento.preventDefault();

    const ID = inputIdListar.value

    const config = {

        method: "GET",
    }

    const resposta = await fetch(`${BASE_URL}/produtos/${ID}`, config)

    const retorno = await resposta.json()
    
    inputNomel.value = retorno.name
    inputDescricaol.value = retorno.description
    inputPrecol.value = retorno.price

    alert(`funcionou`)

}