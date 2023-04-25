
const viewParagrafo = document.getElementById("paragrafo")
console.log(viewParagrafo.innerHTML)

const textInput = document.getElementById("texto")
console.log(textInput.value)

const exibirTexto = () => {
    /* console.clear() */
    console.log(document.getElementById("texto").value)
}

const trocarTexto = () => {
    viewParagrafo.innerHTML = textInput.value
    textInput.value = ""
}
