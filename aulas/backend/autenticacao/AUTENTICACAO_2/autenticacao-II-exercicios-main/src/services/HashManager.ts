import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'

dotenv.config()

export class HashManager {

    public hash = async(plaintext: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(plaintext, salt)

        return hash
    }

    public compare = async (plaintext: string, hash: string): Promise<boolean> => {
        /* Não utilizamos o await nesse caso, pois o return funciona como o await */
        return bcrypt.compare(plaintext, hash)
    }
}