export class Account {
    constructor(
        private id: string,
        private ownerId: string,
        private balance: number,
        private createdAt: string
    ) { }
    /* CRIANDO MÉTODOS GETTERS E SETTERS */
    public getId() : string {
        return this.id
    }
    public setId(id : string) {
        this.id = id;
    }
    
    public getOwner_id() : string {
        return this.ownerId
    }
    public setOwner_id(ownerId : string) {
        this.ownerId = ownerId;
    }

    public getBalance() : number {
        return this.balance
    }
    public setBalance(balance : number) {
        this.balance = balance;
    }

    public getCreatead_at() : string {
        return this.createdAt
    }
    public setCreated_at(createdAt : string) {
        this.createdAt = createdAt;
    }
}