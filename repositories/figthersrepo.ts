import connection from "../database/postgres.js";

export default function getFighter(){
    const result = connection.query(`SELECT * FROM fighters;`)

    return result;
}