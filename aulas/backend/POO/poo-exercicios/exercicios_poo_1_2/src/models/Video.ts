export class Video {
    constructor(
        private id: string,
        private title: string,
        private duration: number,
        private date_upload: string
    ) { }
    
    public getId(): string {
        return this.id
    }

    public getTitle(): string {
        return this.title
    }
    public setTitle (newTitle: string): void{
        this.title = newTitle
    }

    public getDuration(): number {
        return this.duration
    }
    public setDuration(newDuration: number): void{
        this.duration = newDuration
    }

    public getDateUpload(): string {
       return this.date_upload
    }
    public setDateUpload(newDateUpload: string): void {
        this.date_upload = newDateUpload
    }
}