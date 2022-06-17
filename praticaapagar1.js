const BASE_URLa = 'https://xp41-produto-api.herokuapp.com'

const inputIda = document.getElementById('ida')

const forma = document.getElementById('apagar')


forma.onsubmit = async (evento) => {

    evento.preventDefault()



    const resposta = inputIda.value

   

    const options = {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        redirect: "follow",
    }

   const final = await fetch(`${BASE_URLa}/produtos/${resposta}`, options)

   alert('Finalmente deu Certo, voce está conseguindo. Parabèns !!!!')
   console.log('grande garoto')
    
}