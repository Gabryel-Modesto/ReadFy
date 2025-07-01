import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const PORT = process.env.PORT


app.use(express.json())

app.get('/', async (req, res) => {
    console.log("Abadaba duuuuu")
    res.send("Hello")
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}`)
});

