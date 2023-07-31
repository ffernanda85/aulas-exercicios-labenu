export class Course{
    constructor(
        private id: string,
        private name: string,
        private lessons: number
    ) { }
    
    getId(): string {
        return this.id
    }
    
    getName(): string {
        return this.name
    }
    setName(newName:string): void{
        this.name = newName
    }

    getLessons(): number {
        return this.lessons
    }
    setLessons(newLessons: number): void {
        this.lessons = newLessons
    }
}