import Pool from 'pg.Pool'
const pool = new Pool(
    {
        user:'postgres',
        host:'localhost',
        database:'login',
        password:'root',
        port: 5432,
    }
)
export default pool;