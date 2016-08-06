var express = require('express');
// var PokemonModel = require('./models/pokemon')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const _schema = {
    name: String,
    attack: Number,
    defense: Number
}
const pokemonSchema = new Schema(_schema)
const PokemonModel = mongoose.model('Pokemon', pokemonSchema)
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    PokemonModel.find({}, (err, data) => {
        if (err) throw new Error(err)
        res.json(data)
    })
});

router.get('/:id', (req, res, next) => {
    PokemonModel.find({
        _id: req.params.id
    }, (err, data) => {
        if (err) throw new Error(err)
        res.json(data)
    })
});

router.put('/:id', (req, res, next) => {
    PokemonModel.find({
        _id: req.params.id
    }, req.body, (err, data) => {
        if (err) throw new Error(err)
        res.json(data)
    })
});

router.delete('/:id', (req, res, next) => {
    PokemonModel.remove({
        _id: req.params.id
    }, (err, data) => {
        if (err) throw new Error(err)
        res.json(data)
    })
});

router.post('/', (req, res, next) => {
    PokemonModel.create(req.body, (err, data) => {
        if (err) throw new Error(err)
        res.json(data)
    })
});

module.exports = router;
