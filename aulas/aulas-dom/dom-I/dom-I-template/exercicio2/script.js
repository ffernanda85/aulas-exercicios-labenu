/* let nome = document.getElementById("nome")
console.log(nome.value)
nome.value = ""
console.log(nome.value)

let endereco = document.getElementById("endereco")
console.log(endereco.value)
endereco.value = ""
console.log(endereco.value)

let email = document.getElementById("email")
console.log(email.value)
email.value = ""
console.log(email.value) */

const mostrarNome = () => {
    console.log(document.getElementById("nome").value)
}

const mostrarEndereco = () => {
    console.log(document.getElementById("endereco").value)
}

const mostrarEmail = () => {
    console.log(document.getElementById("email").value)
}

const mostrarForm = () => {
    mostrarNome()
    mostrarEndereco()
    mostrarEmail()

    document.getElementById("nome").value = ""
    document.getElementById("endereco").value = ""

    document.getElementById("email").value = ""
}