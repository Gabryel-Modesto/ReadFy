function validateBookFields(req, res, next){
    const {title, author, description, year, category, cover} = req.body;

    if(!title || !author || !description || !year || !category || !cover) {
    return res.status(400).send("Todos os campos precisam ser preenchidos!")
  };

  next()
};

export default validateBookFields;