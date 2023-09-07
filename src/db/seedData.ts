import { Prisma } from '@prisma/client';
import client from '../lib/client';

async function dropTables() {
    console.log('Dropping All Tables...');
    // drop all tables, in the correct order
    try {
        await  client.$queryRaw(Prisma.sql`
        DROP TABLE IF EXISTS products;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS carts;
        DROP TABLE IF EXISTS orders;
    `)
    } catch (error) {
        throw error; 
    }
}

async function createTables() {
    try {
      console.log("Starting to build tables...");
      // create all tables, in the correct order
  
      console.log("Finished building tables!");
    } catch (error) {
      console.error("Error building tables!");
      throw error;
    }
}

async function createInitialUsers() {
    throw new Error('Function not implemented.');
}

async function createInitialProducts() {
    throw new Error('Function not implemented.');
}

async function createInitialCarts() {
    throw new Error('Function not implemented.');
}

async function createInitialOrders() {
    throw new Error('Function not implemented.');
}
  

export default async function rebuildDB() {
    try {
      console.log("Connecting client...")
      client.$connect();
      await dropTables();
      await createTables();
      await createInitialUsers();
      await createInitialProducts();
      await createInitialCarts();
      await createInitialOrders();
    } catch (error) {
      console.log('Error during rebuildDB')
      throw error;
    }
  }