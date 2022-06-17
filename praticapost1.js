const BASE_URL = "https://xp41-produto-api.herokuapp.com";
const inputNome = document.getElementById('nome');
const inputDescricao = document.getElementById('descricao');
const inputImagem = document.getElementById('imagem');
const inputPreco = document.getElementById('preco')

const formulario = document.getElementById('cadastrar');

formulario.onsubmit = async (evento) => {

    evento.preventDefault();

    const newProduto = {
                    name: inputNome.value,
                    description: inputDescricao.value,
                    poster: inputImagem.value,
                    price: inputPreco.value
            
                }

                const configuracoes = {
                            method: "POST",
                            // JSON STRINGFy transforma um objeto em json, e o metodo parce transforma o json em javascript
                            body: JSON.stringify(newProduto),
                            headers:{
                                'Content-Type':'application/json'
                    
                            } 
                        }



    const resposta = await fetch(`${BASE_URL}/produtos`, configuracoes)

    alert("deu certo")
        
}




// const newProduto = {
//             name: inputNome.value,
//             description: inputDescricao.value,
//             poster: inputImagem.value,
//             price: inputPreco.value
    
//         }

// const configuracoes = {
//             method: "POST",
//             // JSON STRINGFy transforma um objeto em json, e o metodo parce transforma o json em javascript
//             body: JSON.stringify(newProduto),
//             headers:{
//                 'Content-Type':'application/json'
    
//             },
//             redirect: "follow"
//         }
//         await fetch(`${BASE_URL}/produtos`, configuracoes)

//     }

    












// // evento onsubmit capta os dados quando ha o envio de um formulario
// form.onsubmit = async (evento) => {
//     //impede que a pagina seja recarreada o prevent default
//     evento.preventDefault();

//     const newProduto = {
//         name: inputNome.value,
//         description: inputDescricao.value,
//         poster: inputImagem.value,
//         price: inputPreco.value

//     }

//     const configuracoes = {
//         method: "POST",
//         // JSON STRINGFy transforma um objeto em json, e o metodo parce transforma o json em javascript
//         body: JSON.stringify(newProduto),
//         headers:{
//             'Content-Type':'application/json'

//         } 
//     }
      

//     const resposta = await fetch(`${BASE_URL}/produtos`, configuracoes)

//     console.log(resposta)

// }
