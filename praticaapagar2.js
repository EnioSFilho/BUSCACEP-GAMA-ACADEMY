const ida = document.getElementById('ida');
const Nome = document.getElementById('n');
const Desc = document.getElementById('d');
const preco = document.getElementById('p')


const apagar = document.getElementById('apagar');

const listar = document.getElementById('apagar');

listar.onkeyup = async (evento) => {

    evento.preventDefault()

    const ID = ida.value

    const config = {

        method: "GET"
        
    }

    const resultado = await fetch(`${BASE_URL}/produtos/${ID}`, config)
    const resposta = await resultado.json()

    Nome.value = resposta.name;
    Desc.value = resposta.description;
    preco.value = resposta.price

}

apagar.onsubmit = async (evento) => {

    evento.preventDefault()

    const ID = ida.value

    const config = {

        method: "DELETE"
    }

    await fetch(`${BASE_URL}/produtos/${ID}`, config)

    alert(`funcionou`)
}
