function validadeById(req, res, next) {
    const id_book = req.body.id_book

    if(!id_book || isNaN){
        return res.status(400).send('Erro, in inválido')
    };

    next()
}

export default validadeById;