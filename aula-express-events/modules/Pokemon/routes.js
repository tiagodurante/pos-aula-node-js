let express = require('express')
let CRUD = require('./_crud')
let router = express.Router()

/* GET users listing. */
router.get('/', CRUD.getAll)
router.get('/:id', CRUD.get)
router.put('/:id', CRUD.put)
router.delete('/:id', CRUD.delete)
router.post('/', CRUD.create)

module.exports = router
