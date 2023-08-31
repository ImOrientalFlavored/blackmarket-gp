import { Client } from "pg";

export async function dropTables(client:Client) {
    console.log('Dropping All Tables...');
    // drop all tables, in the correct order
    try {
        await  client.query(`
        DROP TABLE IF EXISTS products;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS carts;
        DROP TABLE IF EXISTS orders;
    `)
    } catch (error) {
        throw error; 
    }
}

export async function dropTable(client:Client, table:string) {
    console.log('Dropping All Tables...');
    // drop all tables, in the correct order
    try {
        await  client.query(`
        DROP TABLE IF EXISTS ${table.toLowerCase()};
    `)
    } catch (error) {
        throw error; 
    }
}