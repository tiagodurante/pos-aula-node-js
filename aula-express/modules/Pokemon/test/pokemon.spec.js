const assert = require('assert')
const banco = require('./../../../db/config_test')
const controller = require('./../_controller')
describe('Pokemon module', () => {
    before((done) => {
        let callback = (err, data) => {
            done()
        }
        controller.delete({}, callback)
    })
    describe('Quando iniciamos sem pokemon, a lista deve vir vazia', () => {
        it('deve retornar um array VAZIO, sem nada de pokemons', (done) => {
            let query = {}
            let callback = (err, data) => {
                assert.equal([], data, 'lista veio vazia')
            }
            controller.find(query, callback)
            done()
        })
    })
    describe('quando cadastrarmos um novo pokemon, o retorno deve ser o mesmo objeto com o seu _id', () => {
        it('o objeto retornado deve ser igual ao que foi adicionado, mas com o _id', (done) => {
            let mod = {
                name: 'alexmon',
                attack: 9001,
                defense: 1000
            }
            let callback = (err, data) => {
                assert.ok(data._id, 'Objeto não veio correto')
                assert.equal(mod.attack, data.attack)
                assert.equal(mod.defense, data.defense)
                assert.equal(mod.name, data.name)
                done()
            }
            controller.create(mod, callback)
        })
    })
})
