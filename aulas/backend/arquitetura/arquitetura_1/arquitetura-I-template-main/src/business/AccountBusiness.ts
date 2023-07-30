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

    async getAccountBalance(input: any) {
        const { id } = input
        const accountDatabase = new AccountDatabase()

        const accountDBExists = await accountDatabase.findAccountById(id)
        if (!accountDBExists) {
            throw new Error("ID not found");
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

    createAccount = async (input: any) => {
        const { id, ownerId } = input
        const accountDatabase = new AccountDatabase()

        if (typeof id !== "string") {
            throw new Error("'id' deve ser string")
        }
        if (typeof ownerId !== "string") {
            throw new Error("'ownerId' deve ser string")
        }

        const accountDBExists = await accountDatabase.findAccountById(id)
        if (accountDBExists) {
            throw new Error("ID already exists");
        }

        const newAccount = new Account(
            id,
            0,
            ownerId,
            new Date().toISOString()
        )

        const newAccountDB: AccountDB = {
            id: newAccount.getId(),
            balance: newAccount.getBalance(),
            owner_id: newAccount.getOwnerId(),
            created_at: newAccount.getCreatedAt()
        }
        await accountDatabase.insertAccount(newAccountDB)
        const output = {
            message: "created account",
            newAccount: newAccountDB
        }
        return output
    }

    editAccountBalance = async (input: any) => {
        const { id, value } = input
        const accountDatabase = new AccountDatabase()

        const accountDBExists: AccountDB |undefined = await accountDatabase.findAccountById(id)
        if (!accountDBExists) {
            throw new Error("'ID' not found")
        }
        if (typeof value !== "number") {
            throw new Error("'value' deve ser number")
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
        const output = {
            message: "updated balance",
            balance: newBalance
        }
        return output
    }
}