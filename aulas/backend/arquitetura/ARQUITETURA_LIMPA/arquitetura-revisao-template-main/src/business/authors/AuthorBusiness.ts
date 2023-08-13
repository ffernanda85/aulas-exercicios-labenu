import { AuthorDatabase } from "../../database/authors/AuthorDatabase";
import { getAuthorInputDTO, getAuthorOutputDTO } from "../../dtos/authors/getAuthors.dto";
import { AuthorDB } from "../../models/authors/Author";

export class AuthorBusiness{
    constructor(
        private authorDatabase: AuthorDatabase
    ) { }
    
    getAuthors = async (input: getAuthorInputDTO): Promise<getAuthorOutputDTO> => {
        const { q } = input
        const result: getAuthorOutputDTO = await this.authorDatabase.getAllAuthors(q)
        
        return result
    }
}