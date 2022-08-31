import connection from "../database/postgres.js";

export default function getFighter(){ 
    return connection.query(`SELECT * FROM fighters;`) ;
}