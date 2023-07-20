import { TAccountDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class AccountDatabase extends BaseDatabase {
    
    async findAccounts(): Promise<TAccountDB[]> {
        const accountsDB: TAccountDB[] = await BaseDatabase.connection("accounts")
        return accountsDB
    }

    findBalanceById() {
        
    }

    insertAccount() {
        
    }

    updateBalanceById() {
        
    }

}