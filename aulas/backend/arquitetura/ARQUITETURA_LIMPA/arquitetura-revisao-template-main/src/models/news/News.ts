export class News{
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private publishedAt: string,
        private author: string
    ) { }
}

export interface NewsDBModel {
    id: string,
    title: string,
    description: string,
    published_at: string,
    author: string
}