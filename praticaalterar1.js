const BASE_URLk = 'https://xp41-produto-api.herokuapp.com'

const inputIdu = document.getElementById('idu');
const inputNomeu = document.getElementById('nomeu');
const inputLinku = document.getElementById('linku');
const inputDescricaou = document.getElementById('descricaou');
const inputPrecou = document.getElementById('precou');

const formk = document.getElementById('alterar');


formk.onsubmit = async (evento) => {
    
    evento.preventDefault()

    const valorID = inputIdu.value

    

    const atualiza = {

    name: inputNomeu.value,
    poster: inputLinku.value,
    description: inputDescricaou.value,
    price: inputPrecou.value
    }

    
    const config = {

        method: 'PUT',
        body: JSON.stringify(atualiza) ,
        headers: {
            "Content-Type" : 'application/json'
        },
        redirect: 'follow'
    }

    await fetch(`${BASE_URL}/produtos/${valorID}`, config)

    alert('Excellent  !!! beaultyful')

}