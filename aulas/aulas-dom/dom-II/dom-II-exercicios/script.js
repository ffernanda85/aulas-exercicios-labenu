let container = document.getElementById("container")
let newDiv

/* const adicionaItem = () => {
    newDiv = document.createElement("div")

    newDiv.setAttribute('onclick', 'removeItem(event)')
    newDiv.setAttribute('class', 'item')

    container.appendChild(newDiv)
} */

const removeItem = (event) => {
    event.target.remove()
}


//Adicionando itens com template e innerHTML
newDiv = 
`
<div class="item" onclick="removeItem(event)">
    <p>Novo Item</p>
</div>
`

const adicionaItem = () => {
    container.innerHTML += newDiv
}
