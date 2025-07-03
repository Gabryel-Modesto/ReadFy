import dbConnection from '../db/dbConnection.js'

export async function  getAllBooks() {
    try {
        const [rows] = await dbConnection.query(`SELECT * FROM ReadFy`)
        return rows;
    } catch (error) {
        console.error('Erro ao buscar livros', error);
        throw error;
    };
};

