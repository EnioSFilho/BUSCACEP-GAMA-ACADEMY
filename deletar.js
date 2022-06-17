let url = "https://xp41-produto-api.herokuapp.com/produtos/"

const idForm = document.getElementById('ida')


idForm.onkeyup = async () => {

    const options = {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        redirect: "follow",
    }

    await fetch(url, options)
        .then(response => console.log(response.status))

}