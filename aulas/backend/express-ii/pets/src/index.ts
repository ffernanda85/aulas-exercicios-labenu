import express, { Response, Request } from 'express';
import cors from 'cors';
import { pets } from './database';
import { PET_SIZE, TPet } from './types';

//criação do servidor express
const app = express();

//configurando respostas em JSON
app.use(express.json());

//habilitando o cors para rodar externamente
app.use(cors());

//startando o servidor na porta 3003
app.listen(3003, () => {
    console.log("servidor rodando na porta 3003");
})

//getAllPets
app.get("/pets", (req: Request, res: Response) => {
    res.status(200).send(pets)
})

//searchPetByName
app.get("/pets/search", (req: Request, res: Response) => {
    const name = req.query.name

    const result = pets.filter(pet => {
        return pet.name.toLowerCase().includes(name.toString().toLowerCase())
    })
    res.status(200).send(result)
})

//createNewPet
app.post("/pets", (req: Request, res: Response) => {
    const { id, name, age, size } = req.body
    
    const newPet: TPet = {
        id,
        name,
        age,
        size
    }

    pets.push(newPet)

    pets.sort((a, b) => {
        if (a.id < b.id) {
            return -1
        } else if (a.id > b.id) {
            return 1
        } else {
            return 0
        }
    })

    res.status(201).send("Cadastro de Pet Realizado com Sucesso!")
})

//searchPetById
//colocar sempre endpoints que se utilizam de configurações de path params no final do código
//para não conflitar com os endpoints que se utilizam de query params
app.get("/pets/:id", (req: Request, res: Response) => {
    const id = req.params.id

    const result: TPet = pets.find(pet => pet.id === id)

    res.status(200).send(result)
})

//putPet
app.put("/pets/:id", (req: Request, res: Response) => {
    const id = req.params.id

    const newId = req.body.id as string | undefined
    const newName = req.body.name as string | undefined
    const newAge = req.body.age as number | undefined
    const newSize = req.body.size as PET_SIZE | undefined

    const pet = pets.find(pet => pet.id === id)

    if (pet) {
        pet.id = newId || pet.id
        pet.name = newName || pet.name
        pet.age = newAge <= 0 && pet.age || isNaN(newAge) && pet.age || newAge
        pet.size = newSize || pet.size
    }
    
    res.status(200).send("Atualização realizada com sucesso!")
})

//delPetById
app.delete("/pets/:id", (req: Request, res: Response) => {
    const id = req.params.id

    //descobrindo indice do item a ser deletado
    const petIndex = pets.findIndex(pet => pet.id === id)

    //verificando se petIndex existe
    if (petIndex >= 0) {
        //deletando o item referente àquela posição atraves do splice
        pets.splice(petIndex, 1)
        res.status(200).send("Item removido com sucesso!")
    } else {
        res.status(400).send("Pet não encontrado!")
    }

})