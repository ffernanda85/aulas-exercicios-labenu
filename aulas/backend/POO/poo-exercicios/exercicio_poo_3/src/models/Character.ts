export class Character {
    constructor(
        private id: string,
        private name: string,
        private series_name: string,
        private register_date: string
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

    public getRegisterDate(): string {
       return this.register_date
    }
    public setRegisterDate(newRegisterDate: string): void {
        this.register_date = newRegisterDate
    }
}