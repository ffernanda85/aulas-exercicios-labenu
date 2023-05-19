let newItem
let input = document.getElementById("meu-input")


const insereItem = () => {
    
    if (!input.value) {
        return
    }
    newItem = document.createElement('li')
    newItem.innerHTML = input.value
    
    document.getElementById("lista").insertAdjacentElement("beforeend", newItem)

    input.value = ""
}