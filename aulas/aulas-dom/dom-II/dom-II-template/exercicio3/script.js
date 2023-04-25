const mensagem = document.getElementById("mensagem")

const checaCaps = (event) => {
    if (event.key === "Shift") {
        mensagem.innerHTML = "O SHIFT FOI PRESSIONADO!"
    } else {
        mensagem.innerHTML = ""
    }
}