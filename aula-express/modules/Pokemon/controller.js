let PokemonModel = require('./model')

let controller = {
    create: (req, res) => {
        PokemonModel.create(req.body, (err, data) => {
            if (err) throw new Error(err)
            res.json(data)
        })
    },
    put: (req, res) => {
        PokemonModel.update({
            _id: req.params.id
        }, req.body, (err, data) => {
            if (err) throw new Error(err)
            res.json(data)
        })
    },
    delete: (req, res) => {
        PokemonModel.remove({
            _id: req.params.id
        }, (err, data) => {
            if (err) throw new Error(err)
            res.json(data)
        })
    },
    getAll: (req, res) => {
        PokemonModel.find({}, (err, data) => {
            if (err) throw new Error(err)
            res.json(data)
        })
    },
    get: (req, res) => {
        PokemonModel.findOne({
            _id: req.params.id
        }, (err, data) => {
            if (err) throw new Error(err)
            res.json(data)
        })
    }
}

module.exports = controller
