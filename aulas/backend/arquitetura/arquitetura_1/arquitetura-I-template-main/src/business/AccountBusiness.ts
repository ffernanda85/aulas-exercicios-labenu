import { AccountDatabase } from "../database/AccountDatabase"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundError"
import { Account } from "../models/Account"
import { AccountDB, AccountDBPost, AccountDBUpdate } from "../types"

export class AccountBusiness{
    getAccounts = async (): Promise<Account[]> => {
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

    async getAccountBalance(id: string): Promise<number>{
        const accountDatabase = new AccountDatabase()

        const accountDBExists = await accountDatabase.findAccountById(id)
        if (!accountDBExists) {
            throw new NotFoundError("ID not found");
        }

        const account = new Account(
            accountDBExists.id,
            accountDBExists.balance,
            accountDBExists.owner_id,
            accountDBExists.created_at
        )
        const balance = account.getBalance()
        return balance
    }

    createAccount = async (input: AccountDBPost): Promise<Account> => {
        const { id, owner_id } = input
        const accountDatabase = new AccountDatabase()

        if (typeof id !== "string") {
            throw new BadRequestError("'ID' must be string")
        }
        if (typeof owner_id !== "string") {
            throw new BadRequestError("'ownerId' must be string")
        }

        const accountDBExists = await accountDatabase.findAccountById(id)
        if (accountDBExists) {
            throw new BadRequestError("ID already exists");
        }

        const newAccount = new Account(
            id,
            0,
            owner_id,
            new Date().toISOString()
        )

        const newAccountDB: AccountDB = {
            id: newAccount.getId(),
            balance: newAccount.getBalance(),
            owner_id: newAccount.getOwnerId(),
            created_at: newAccount.getCreatedAt()
        }
        await accountDatabase.insertAccount(newAccountDB)
        
        return newAccount
    }

    editAccountBalance = async (input: AccountDBUpdate): Promise<number> => {
        const { id, value } = input
        const accountDatabase = new AccountDatabase()

        const accountDBExists: AccountDB |undefined = await accountDatabase.findAccountById(id)
        if (!accountDBExists) {
            throw new NotFoundError("'ID' not found")
        }
        if (typeof value !== "number") {
            throw new BadRequestError("'value' must be number")
        }
        const account = new Account(
            accountDBExists.id,
            accountDBExists.balance,
            accountDBExists.owner_id,
            accountDBExists.created_at
        )
        const newBalance: number = account.getBalance() + value
        account.setBalance(newBalance)

        await accountDatabase.updateBalanceById(id, newBalance)
        
        return newBalance
    }
}