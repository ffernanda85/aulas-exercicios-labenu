const clientes = [
    {
        codigoCliente: 001,
        nome: "Flávia",
        idade: 37,
        compras: [],
        valor: 8000,
        pago: true

    },
    {
        codigoCliente: 002,
        nome: "Izabela",
        idade: 39,
        compras: [],
        valor: 3900,
        pago: true

    },
    {
        codigoCliente: 003,
        nome: "Helaine",
        idade: 42,
        compras: [],
        valor: 1000,
        pago: false

    },
    {
        codigoCliente: 004,
        nome: "Fábio",
        idade: 35,
        compras: [],
        valor: 1800,
        pago: false

    }
]

const atendentes = [
    {
        codigoAtendente: 001,
        nome: "Raimundo",
        idade: 30
    },
    {
        codigoAtendente: 002,
        nome: "Renata",
        idade: 41
    },
    {
        codigoAtendente: 003,
        nome: "Rafaela",
        idade: 25
    },
    {
        codigoAtendente: 004,
        nome: "Ilda",
        idade: 28
    }
]

let inadimplentes
const nomesClientes = clientes.forEach((item, indice, array) => {

    if (!item.pago) {
        inadimplentes = item
        inadimplentes.atendente = atendentes[indice]
        console.log(inadimplentes)
    }
})

const orderNamesClients = clientes.forEach((item, indice, array) => {
    item.sort((a, b) => {
        if (a.nome > b.nome) {
            return 1
        }
        if (a.nome < b.nome) {
            return -1
        }
        return 0
    })
})
