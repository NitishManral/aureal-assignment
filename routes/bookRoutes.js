const express = require('express');
const bookService = require('../services/bookService'); // replace with the path to your service layer file

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const books = await bookService.getBooks();
        if (!books) {
            return res.status(404).json({ error: 'No books found' });
        }
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await bookService.getBookById(bookId);
        if (book == null || book.length === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/name/:name', async (req, res) => {
    try {
        const bookName = req.params.name;
        const book = await bookService.getBookByName(bookName);
        if (book == null || book.length === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newBook = req.body;
        if(newBook.title === '' || newBook.author === '' || !newBook.title || !newBook.author) {
            return res.status(400).json({ error: 'Please fill in all the fields' });
        }
        const createdBook = await bookService.createBook(newBook.title, newBook.author, newBook.price);
        if (!createdBook) {
            return res.status(400).json({ error: 'Failed to create book' });
        }
        res.status(201).json(createdBook);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const updatedBook = req.body;
        if(updatedBook.title === '' || updatedBook.author === ''  || !updatedBook.id || !updatedBook.title || !updatedBook.author) {
            return res.status(400).json({ error: 'Please fill in all the fields' });
        }
        const result = await bookService.updateBook(bookId, updatedBook.title, updatedBook.author, updatedBook.price);

        if (!result) {
            return res.status(400).json({ error: 'no book with given id' });
        }
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const result = await bookService.deleteBook(bookId);
        if (!result) {
            return res.status(400).json({ error: 'no book with given id' });
        } 
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
module.exports = router;