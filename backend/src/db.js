import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

async function setup() {
  try {
    console.log('Connection established');

    await sql`
      CREATE TABLEIF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255),
        publication_year INT,
        in_stock BOOLEAN,
        stock_amount INT
      );
    `;
    console.log('Finished creating books table.');


  } catch (err) {
    console.error('Connection failed.', err);
  }
}

setup();