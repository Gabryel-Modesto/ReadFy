import Book from "../model/bookModel.js";

function registerBook(req, res) {
  const { title, author, description, year, category, cover } = req.body;

  const newBook = new Book(
    title, 
    author,
    description,
    year, 
    category, 
    cover);

  res.send(newBook.informationsDisplay());
};

export default registerBook

