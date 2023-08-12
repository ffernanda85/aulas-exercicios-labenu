import { AuthorDatabase } from "../database/AuthorDatabase";
import { getAuthorInputDTO, getAuthorOutputDTO } from "../dtos/getAuthorInputDTO";
import { AuthorDB } from "../models/Author";

export class AuthorBusiness{
    constructor(
        private authorDatabase: AuthorDatabase
    ) { }
    
    getAuthor = async (input: getAuthorInputDTO): Promise<getAuthorOutputDTO> => {
        const { q } = input
        const result: getAuthorOutputDTO = await this.authorDatabase.getAllAuthors(q)
        
        return result
    }
}