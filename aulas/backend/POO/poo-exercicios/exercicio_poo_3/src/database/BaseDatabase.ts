import { knex } from "knex"

export abstract class BaseDatabase {
    
    protected static connection = knex({
        client: "sqlite3",
        connection: {
            filename: "./src/database/poo-3-exercicio.db",
        },
        useNullAsDefault: true,
        pool: { 
            min: 0,
            max: 1,
            afterCreate: (conn: any, cb: any) => {
                conn.run("PRAGMA foreign_keys = ON", cb)
            }
        }
    })

}

/* export const db = knex({
    client: "sqlite3",
    connection: {
        filename: "./src/database/poo-1-exercicio.db",
    },
    useNullAsDefault: true,
    pool: { 
        min: 0,
        max: 1,
        afterCreate: (conn: any, cb: any) => {
            conn.run("PRAGMA foreign_keys = ON", cb)
        }
    }
}) */