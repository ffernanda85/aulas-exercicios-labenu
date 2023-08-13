import { AuthorDatabase } from "../database/AuthorDatabase";
import { getAuthorInputDTO, getAuthorOutputDTO } from "../dtos/getAuthors.dto";
import { AuthorDB } from "../models/Author";

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