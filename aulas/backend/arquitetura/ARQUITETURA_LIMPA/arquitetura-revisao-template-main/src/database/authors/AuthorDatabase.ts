import { AuthorDB } from "../../models/authors/Author";
import { BaseDatabase } from "../BaseDatabase";

export class AuthorDatabase extends BaseDatabase{
    private static TABLE_NAME = 'authors'

    getAllAuthors = async (q: string | undefined): Promise<AuthorDB[]> => {
        let authors
        
        if (q) {
            const result: AuthorDB[] = await BaseDatabase.connection(AuthorDatabase.TABLE_NAME).where('name', 'LIKE', `%${q}%`)
            authors = result
        } else {
            const result: AuthorDB[] = await BaseDatabase.connection(AuthorDatabase.TABLE_NAME)
            authors = result
        }

        return authors
    }
}