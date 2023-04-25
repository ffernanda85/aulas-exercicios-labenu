
const frutas = ["laranja", "limão", "uva"];
let newFruit;
let listFruit;
let fruta;
let input = document.getElementById("inputFruit");

const addFruit = () => {
    if (document.getElementById("fruta-4").innerHTML === "") {
        document.getElementById("fruta-4").innerHTML = input.value

    } else if (input.value) {
        newFruit = document.createElement("li")
        newFruit.innerHTML = input.value
        listFruit = document.getElementById("lista-de-frutas")
        listFruit.insertAdjacentElement("beforeend", newFruit)
    }
    input.value = ""
}

for (let i in frutas) {
    fruta = document.getElementById(`fruta-${+i + 1}`)
    fruta.innerHTML = frutas[i]
}


















/* document.getElementById("fruta-1").innerHTML = frutas[0]
document.getElementById("fruta-2").innerHTML = frutas[1]
document.getElementById("fruta-3").innerHTML = frutas[2] */

//Adicionando um label, input e button na ul através do innerHTML
//const labelInput = document.getElementById("lista-de-frutas")
/* labelInput.innerHTML += "<br><br><label for='inputFruit'><b>Insira Nova Fruta:</b></label>";
labelInput.innerHTML += "<br><br><input type='text' id='inputFruit' value=''>";
labelInput.innerHTML += "<br><button onclick='addFruit()' id='btn'>Adicionar Fruta</button>"; */

/* const addFruit = () => {
    newFruit = document.getElementById("fruta-4")
    valueInput = document.getElementById("inputFruit")
    newFruit.innerHTML = valueInput.value
    valueInput.value = ""
}

console.log(document.getElementById("inputFruit").value)
 */


