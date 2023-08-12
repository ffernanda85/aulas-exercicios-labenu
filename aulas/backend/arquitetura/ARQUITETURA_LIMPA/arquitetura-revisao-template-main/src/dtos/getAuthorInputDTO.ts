import { AuthorDB } from "../models/Author"

export interface getAuthorInputDTO{
    q?: string
}

export type getAuthorOutputDTO = AuthorDB[]