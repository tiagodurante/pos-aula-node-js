require('./config')
const http = require('http')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const _schema = {
    name: String,
    attack: Number,
    defense: Number
}
const pokemonSchema = new Schema(_schema)
const PokemonModel = mongoose.model('Pokemon', pokemonSchema)
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application-jsoncharset:utf-8'
    })
    const url = req.url
    console.log('url', url)
    switch (url) {
        case '/listar':
            PokemonModel.find({}, function(err, data) {
                if (err) return console.log('ERRO: ', err)
                return res.end('Buscou: ' + data)
            })
            break
        case '/criar':
            PokemonModel.create({
                name: 'Suissamon'
            }, function(err, data) {
                if (err) return console.log('ERRO: ', err)
                return res.end('Inseriu:', data)
            })
            break
        case '/atualizar':
            PokemonModel.update({
                name: /suissamon/i
            }, {
                attack: 9001
            }, (err, data) => {
                if (err) return console.log('ERRO: ', err)
                return res.end('Buscou:', data)
            })
            break
        case '/remover':
            PokemonModel.remove({
                _id: '57a608817c5cfcf3043a8c90'
            }, (err, data) => {
                if (err) return console.log('ERRO: ', err)
                return res.end('Buscou:', data)
            })
            break
        default:
            res.end('<h1>hello world</h1>')
    }
}).listen(3000)
console.log('server rodando em localhost:3000')
