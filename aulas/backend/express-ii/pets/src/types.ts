export enum PET_SIZE {
    SMALL = "Pequeno porte",
    MEDIUM = "Médio porte",
    LARGE = "Grande porte"
}

export type TPet = {
    id: string,
    name: string,
    age: number,
    size: PET_SIZE
}
