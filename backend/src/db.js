import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL);

export async function setupDB() {
  try {
    console.log('Connection established');

    await sql`
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2),
        author VARCHAR(255),
        publication_year INT,
        genre VARCHAR(255),
        in_stock BOOLEAN NOT NULL,
        stock_amount INT
      );
    `;
    console.log('Finished initialising DB.');


  } catch (err) {
    console.error('Connection failed.', err);
  }
}