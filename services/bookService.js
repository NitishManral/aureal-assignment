const bookData = require('../data/bookData'); // replace with the path to your data layer file

const getBooks = async () => {
  try {
    return await bookData.getBooks();
  } catch (err) {
    throw new Error('Failed to get books: ' + err.message);
  }
};

const getBookById = async (id) => {
  try {
    return await bookData.getBookById(id);
  } catch (err) {
    
    throw new Error('Failed to get book by id: ' + err.message);
  }
};

const getBookByName = async (title) => {
  try {
    return await bookData.getBookByName(title);
  } catch (err) {
    throw new Error('Failed to get book by name: ' + err.message);
  }
};

const createBook = async (title, author, price) => {
  try {
    return await bookData.createBook(title, author, price);
  } catch (err) {
    console.log(err.message);
    throw new Error('Failed to create book: ' + err.message);
  }
};

const updateBook = async (id, title, author, price) => {
  try {
    return await bookData.updateBook(id, title, author, price);
  } catch (err) {
    throw new Error('Failed to update book: ' + err.message);
  }
};

const deleteBook = async (id) => {
  try {
    return await bookData.deleteBook(id);
  } catch (err) {
    throw new Error('Failed to delete book: ' + err.message);
  }
};

module.exports = {
  getBooks,
  getBookById,
  getBookByName,
  createBook,
  updateBook,
  deleteBook
};