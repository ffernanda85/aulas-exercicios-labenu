import { UserDB } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "users"

  public async findUsers(q: string | undefined) {
    let usersDB

    if (q) {
      const result: UserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .where("name", "LIKE", `%${q}%`)

      usersDB = result
    } else {
      const result: UserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)

      usersDB = result
    }

    return usersDB
  }

  public async findUserById(id: string) {
    const [userDB]: UserDB[] | undefined[] = await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .where({ id })

    return userDB
  }

  public async insertUser(newUserDB: UserDB) {
    await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .insert(newUserDB)
  }

  public async updateUser(idToEdit: string, updatedUserDB: UserDB) {
    await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .update(updatedUserDB)
      .where({ id: idToEdit })
  }

  public async deleteUserById(idToDelete: string) {
    await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .delete()
      .where({ id: idToDelete })
  }
}
