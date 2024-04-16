const { Pool } = require('pg');



const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false,
    }
});

const getBooks = async () => {
  const res = await pool.query('SELECT * FROM books');
  return res.rows;
};
const getBookByName = async (title) => {
    const res = await pool.query('SELECT * FROM books WHERE title = $1', [title]);
    return res.rows;
  };
const getBookById = async (id) => {
  const res = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
  return res.rows[0];
};

const createBook = async (title, author, price) => {
  const res = await pool.query('INSERT INTO books (title, author, price) VALUES ($1, $2, $3) RETURNING *', [title, author, price]);
  return res.rows[0];
};

const updateBook = async (id, title, author, price) => {
  const res = await pool.query('UPDATE books SET title = $1, author = $2, price = $3 WHERE id = $4 RETURNING *', [title, author, price, id]);
  return res.rows[0];
};

const deleteBook = async (id) => {
  const res = await pool.query('DELETE FROM books WHERE id = $1', [id]);
  return res.rowCount;
};

module.exports = {
  getBooks,
  getBookById,
  getBookByName,
  createBook,
  updateBook,
  deleteBook
};