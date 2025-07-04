import { getBookById } from "../model/getBookById.js";

export async function  BookId(req, res) {
    try {
        const books = await getBookById();
         res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message: 'Erro ao buscar no bando'});
    };
};