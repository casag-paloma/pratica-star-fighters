import pkg from "pg";

const { Pool } = pkg;

const connection = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'starfighters',
  password: '1994',
  port: 5432
})

export default connection;