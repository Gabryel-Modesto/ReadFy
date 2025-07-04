import express from "express";
import registerBook from "../controllers/RegisterBook.js";
import validateBookFields from "../middlewares/validateBookFields.js";
import { getAllBooks } from "../model/getAllBooks.js";
import { getBookById } from "../model/getBookById.js";
import validadeById from "../middlewares/validadeById.js";

const bookRoutes = express.Router()

bookRoutes.get('/books', getAllBooks);
bookRoutes.get('/books/:id_book', validadeById,getBookById);
bookRoutes.post('/books', validateBookFields, registerBook);;
//bookRoutes.put('/books/:id_book');
//bookRoutes.delete('/books/:id_book');

export default bookRoutes;

