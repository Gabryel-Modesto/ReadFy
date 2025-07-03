import { getAllBooks } from "../model/getAllBooks.js";

export async function listBooks(req, res) {
    try {
        const books =  await getAllBooks();
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({message: 'Erro ao buscar no banco'});
    };
};