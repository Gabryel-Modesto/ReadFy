import express from 'express'
import dotenv from 'dotenv'
import bookRoutes from './routes/routes_books.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT


app.use(express.json())

app.use(bookRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}`)
});

