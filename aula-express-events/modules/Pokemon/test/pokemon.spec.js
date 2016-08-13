const assert = require('assert')
const banco = require('./../../../db/config_test')
const controller = require('./../_controller')
describe('Pokemon module', () => {
    // before((done) => {
    //     let callback = (err, data) => {
    //         done()
    //     }
    //     controller.delete({}, callback)
    // })
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

    describe('quando alteramos o nome do pokemon, o _id é o mesmo, mas muda o nome', () => {
        it('o objeto retornado deve ter nome diferente do mod, mas o _id é igual', (done) => {
            let query = {
              _id : '57af68051af168f407265306'
            }
            let mod = {
                name: 'alfa-aulanode-mon'
            }
            // let options = {
            //   upsert: true
            // }
            let callback = (err, data) => {
                assert.ok(data.ok)
                done()
            }
            controller.update(query, mod, callback)
        })
    })

    describe('quando removemos um item do banco, o objeto deve ser deletado e sua operacao concluida com sucesso', () => {
        it('o objeto precisa ser removido do banco', (done) => {
            let query = {
              _id : '57af679116fc1bed0720d5b5'
            }
            let callback = (err, data) => {
                assert.ok(data.result.ok)
                done()
            }
            controller.delete(query, callback)
        })
    })
})
