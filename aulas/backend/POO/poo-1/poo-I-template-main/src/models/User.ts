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
    public setName(newName : string): void {
        this.name = newName;
    }
    public setEmail(newEmail : string): void {
        this.email = newEmail;
    }
    public setPassword(newPassword : string): void {
        this.password = newPassword;
    }
}