import { Account } from "../models/Account";
import { TAccountDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class AccountDatabase extends BaseDatabase {
    
    async findAccounts(): Promise<TAccountDB[]> {
        const accountsDB: TAccountDB[] = await BaseDatabase.connection("accounts")
        return accountsDB
    }

    async findAccountById(id: string): Promise<TAccountDB[]> {
        const accountDB = await BaseDatabase.connection("accounts").where({id : id})
        return accountDB
    }

    async insertAccount(newAccount: Account): Promise<void> {
        await BaseDatabase.connection("accounts").insert(
            {
                id: newAccount.getId(),
                balance: newAccount.getBalance(),
                owner_id: newAccount.getOwnerId(),
                created_at: newAccount.getCreatedAt()
            }
        )
    }

    updateBalanceById() {
        
    }

}