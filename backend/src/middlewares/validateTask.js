const validate = (req, res, next) => {
    if (req.body.title === undefined) {
        res.status(400).json({message: 'O campo titulo nao pode estar vazio'});
    }
    if (req.body.title === '') {
        res.status(400).json({message: 'O campo titulo nao pode estar vazio'});
    }
    next();
};

const validateStatus = (req, res, next) => {
    if (req.body.status === undefined) {
        res.status(400).json({message: 'O campo status nao pode estar vazio'});
    }
    if (req.body.status === '') {
        res.status(400).json({message: 'O campo status nao pode estar vazio'});
    }
    next();
};

module.exports = {
    validate,
    validateStatus
};