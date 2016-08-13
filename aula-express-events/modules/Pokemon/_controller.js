'use strict'

const Model = require('./model')
let events = require('events')

const CONTROLLER = {
    create: (data, callback) => {
        const model = new Model(data)
        model.save(callback)
    },
    find: (query, callback) => {
        Model.find(query, callback)
    },
    update: (query, mod, options, callback) => {
        options = options || {}
        Model.update(query, mod, options, callback)
    },
    delete: (query, callback) => {
        Model.remove(query, callback)
    }
}

module.exports = CONTROLLER
