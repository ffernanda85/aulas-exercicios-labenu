import { News } from "../models/News";

export interface DeleteNewsOutput{
    message: string,
    news: News
}