export class Author {
    constructor(
        private id: string,
        private name: string,
        private cpf: string
    ) {}
}

export interface AuthorDB {
    id: string,
    name: string,
    cpf: string
}