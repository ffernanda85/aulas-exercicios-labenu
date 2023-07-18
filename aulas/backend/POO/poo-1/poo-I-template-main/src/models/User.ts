export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private createdAt: string
    ) {}
    
    /* MÉTODOS GETTERS */
    public getId() : string {
        return this.id
    }
    public getName() : string {
        return this.name
    }
    public getEmail() : string {
        return this.email
    }
    public getPassword() : string {
        return this.password
    }
    public getCreatedAt() : string {
        return this.createdAt
    }
    
    /* MÉTODOS SETTERS */
    public setName(name : string): void {
        this.name = name;
    }
    public setEmail(email : string): void {
        this.email = email;
    }
    public setPassword(password : string): void {
        this.password = password;
    }
}

