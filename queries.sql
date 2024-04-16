CREATE DATABASE BooksDB;
CREATE TABLE Books (
    id INT PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    price DECIMAL(5, 2)
);