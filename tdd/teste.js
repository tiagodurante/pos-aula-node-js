'use strict'

const assert = require('assert')
const add = require('./add')
const divide = require('./divide')

assert.equal(3, add(1, 2))
assert.equal(5, add(3, 2))

assert.equal(2, divide(10, 5))
assert.equal(5, divide(50, 10))

let x = false
assert.equal(x, divide(50, 0))
