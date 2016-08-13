let PokemonModel = require('./model') //remover esta linha depois
let CONTROLLER = require('./_controller')

let CRUD = {
    create: (req, res) => {
        let mod = req.body
        let callback = (err, data) => {
            if (err) throw new Error(err)
            res.json(data)
        }
        CONTROLLER.create(mod, callback)
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
        let callback = () => {
            if (err) throw new Error(err)
            res.json(data)
        }
        CONTROLLER.find({}, callback)
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

module.exports = CRUD
