require('./config')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    name: String,
    attack: Number,
    defense: Number
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);
const Suissamon = new PokemonModel({
    name: 'Suissamon'
});

Suissamon.save(function(err, data) {
    if (err) return console.log('ERRO: ', err);
    return console.log('Inseriu:', data);
});
// ou
PokemonModel.create({ name: 'Suissamon' }, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Inseriu:', data);
});

module.exports = PokemonModel;
