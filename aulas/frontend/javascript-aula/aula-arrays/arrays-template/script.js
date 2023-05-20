/* const arrayString = ["banana", "mamão", "amora"]
const arrayNumber = [7, 2, 4]
const arraySortido = ['banana', 12, true]
const arrayNum = [20]
const arrayVazio = []

console.log(arrayString[2]);
console.log(arrayString);
console.log(arrayString.length);
console.log(arraySortido.includes(12));
console.log(arrayNum);
console.log(arrayNum.length);
console.log(arrayNum[0]);
console.log(arrayNum);

// criar uma cópia do arrayString

const copiaArrayString = arrayString.slice()
console.log("copia", copiaArrayString)
console.log("original", arrayString)

copiaArrayString.push("novaString")
console.log(copiaArrayString)

//copiaArrayString.pop()
//console.log(copiaArrayString.pop())
//console.log(copiaArrayString)

copiaArrayString.sort()
console.log(copiaArrayString) */

/* const novoArrayNum = [5,20,35,15,2,1]
const copiaNovoArrayNum = novoArrayNum.slice()

console.log(novoArrayNum);
console.log(copiaNovoArrayNum);

copiaNovoArrayNum.pop();
console.log(copiaNovoArrayNum);
copiaNovoArrayNum.push(6);
console.log(copiaNovoArrayNum);
copiaNovoArrayNum.splice(2,1);

console.log("Array Original:", novoArrayNum);
console.log("Cópia Array:", copiaNovoArrayNum); */

/* const arrayString1 = ["Flávia", "Izabela", "Helaine"]
const arrayNumber1 = [10,5,22]
const arrayDiversos1 = ["Fernanda", 5000, true]
const arraySolitario = [7000]
const arrayVazio1 = []
const nome = "Flávia"

//console.log(arrayVazio1, arrayDiversos1[1], arrayNumber1[2])
//console.log(arraySolitario.length)


arrayString1.push("Fernanda")
const copiaArrayString1 = arrayString1.slice()
console.log("original:",arrayString1)
console.log("copia 1:",copiaArrayString1)
arrayString1.splice(2,2)
console.log("original depois do splice(2,2)",arrayString1)
console.log("copia ",copiaArrayString1) */


const novoArray = [37,5000,2023,3]
const copiaNovoArray = novoArray.slice()

novoArray.sort((a,b)=>a-b);//ordena a array
console.log("original",novoArray)
novoArray.pop()//remover último elemento (3)
novoArray.push(6)//Adiciona 6 no final
novoArray.splice(2,1)//remove o item que está no indice 2


console.log("original",novoArray)
console.log("copia",copiaNovoArray)

//copiaNovoArray.includes()
console.log(copiaNovoArray.includes(50))

copiaNovoArray.unshift("Flávia")
console.log("copia",copiaNovoArray)
novoArray.shift()
console.log("original",novoArray)
