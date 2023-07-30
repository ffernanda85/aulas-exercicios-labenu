import { AccountDatabase } from "../database/AccountDatabase"
import { Account } from "../models/Account"
import { AccountDB } from "../types"

export class AccountBusiness{
    getAccounts = async () => {
        const accountDatabase = new AccountDatabase()
        const accountsDB: AccountDB[] = await accountDatabase.findAccounts()

        const accounts = accountsDB.map(account => new Account(
            account.id,
            account.balance,
            account.owner_id,
            account.created_at
        ))
        return accounts
    }

    
}