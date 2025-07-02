import express from "express";
import registerBook from "../controllers/RegisterBook.js";
import validateBookFields from "../middlewares/validateBookFields.js";

const bookRoutes = express.Router()

//bookRoutes.get('/books');
//bookRoutes.get('/books/:id_book');
bookRoutes.post('/books', validateBookFields, registerBook);;
//bookRoutes.put('/books/:id_book');
//bookRoutes.delete('/books/:id_book');

export default bookRoutes;