export class Character {
    constructor(
        private id: string,
        private name: string,
        private series_name: string,
        private age: number
    ) { }
    
    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }
    public setName (newName: string): void{
        this.name = newName
    }

    public getSeriesName(): string {
        return this.series_name
    }
    public setSeriesName(newSeriesName: string): void{
        this.series_name = newSeriesName
    }

    public getAge(): number {
       return this.age
    }
    public setAge(newAge: number): void {
        this.age = newAge
    }
}