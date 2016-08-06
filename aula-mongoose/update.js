require('./config')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const _schema = {
    name: String,
    attack: Number,
    defense: Number
}
const pokemonSchema = new Schema(_schema)
const PokemonModel = mongoose.model('Pokemon', pokemonSchema)

const query = {name:/suissamon/i}
const mod = {attack:9001}
const options = {multi:true}

PokemonModel.update(query, mod, (err, data) => {
  if (err) return console.log('ERRO: ', err)
  return console.log('Buscou:', data)
})
module.exports = PokemonModel
