import { AccountDatabase } from "../database/AccountDatabase"
import { NotFoundError } from "../errors/NotFoundError"
import { Account } from "../models/Account"
import { AccountDB } from "../types"

export class AccountBusiness {
    getAccounts = async () => {
        const accountDatabase = new AccountDatabase()
        const accountsDB: AccountDB[] = await accountDatabase.findAccounts()

        const accounts = accountsDB.map(account =>
            new Account(
                account.id,
                account.balance,
                account.owner_id,
                account.created_at
            )
        )
        return accounts
    }

    getAccountBalance = async (input: any) => {
        const { id } = input

        const accountDatabase = new AccountDatabase()

        const accountDB = await accountDatabase.findAccountById(id)
        if (!accountDB) {
            throw new NotFoundError("ID not found")
        }

        const account = new Account(
            accountDB.id,
            accountDB.balance,
            accountDB.owner_id,
            accountDB.created_at
        )
        const output = account.getBalance()

        return output
    }

    
}