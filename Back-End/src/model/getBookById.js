import dbConnection from '../db/dbConnection.js'

export async function getBookById(id_book) {
    try {
        const [rows] =  await dbConnection.query(`SELECT * FROM Books WHERE id_book = ?`, [id_book]);

        return rows[0] || null;
    } catch (error) {
        console.error('Erro ao buscar livro', error);
        throw error
    };
};