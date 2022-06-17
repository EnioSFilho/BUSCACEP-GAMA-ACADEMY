const idu = document.getElementById('idu');
const nomeu = document.getElementById('nomeu')
const linku = document.getElementById('linku');
const descricaou = document.getElementById('descricaou');
const precou = document.getElementById('precou');

const formu = document.getElementById('alterar');

formu.onsubmit = async (evento) => {

    evento.preventDefault();

    const ID = idu.value;

    const atualiza = {

        name: nomeu.value,
        poster: linku.value,
        description: descricaou.value,
        price: precou.value
        }

    const config = {
        method: "PUT",
        body: JSON.stringify(atualiza),
        headers:{
            "Content-Type" : "application/json"
        },
        redirect: 'follow'
    }

    await fetch(`${BASE_URL}/produtos/${ID}`, config)

    alert('produto alterado com sucesso')
}