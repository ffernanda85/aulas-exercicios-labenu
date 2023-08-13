import { AuthorDB } from "../../models/authors/Author"

export interface getAuthorInputDTO{
    q?: string
}

export type getAuthorOutputDTO = AuthorDB[]