
const input = document.getElementById("password")
const btn = document.getElementById("btn-senha")
let troca = true

const escondeSenha = (event) => {
    event.preventDefault()

    if (troca) {
        input.setAttribute("type", "password")
        troca = false
        btn.innerHTML = "mostrar senha"
    } else {
        input.setAttribute("type", "text")
        troca = true
        btn.innerHTML = "esconder senha"
    }
}

const form = document.getElementsByTagName('form')
//form[0].setAttribute('class', 'dark')



/* const escondeSenha = (event) => {
    console.log(event)
    event.preventDefault()
    input.setAttribute("type","password")
} */