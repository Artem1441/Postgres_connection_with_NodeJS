import * as pg from 'pg'
const { Pool } = pg.default

const pool = new Pool({
    user: "postgres",
    password: "postgresql",
    host: "localhost",
    port: 5432,
    database: "node_pg"
})

export default pool

