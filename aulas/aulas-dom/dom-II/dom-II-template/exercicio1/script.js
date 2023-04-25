let firstItem = document.createElement("li")
let lastItem = document.createElement("li")
let text

text = document.createTextNode("Item 0")
firstItem.appendChild(text)
document.getElementById("lista").insertAdjacentElement("afterbegin", firstItem);


text = document.createTextNode("Item 5")
lastItem.appendChild(text)
document.getElementById("lista").insertAdjacentElement("beforeend", lastItem);

//add conteúdo com o innerHTML
//firstItem.innerHTML = "Item 0"
//lastItem.innerHTML = "Item 5"


