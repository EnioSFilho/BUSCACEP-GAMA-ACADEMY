fetch("https://reqres.in/api/users?page=2")
.then( (resposta)=> resposta.json())
.then(data => console.log(data))