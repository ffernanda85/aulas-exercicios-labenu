import express, { Response, Request } from 'express';
import cors from 'cors';
import { pets } from './database';
import { TPet } from './types';

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