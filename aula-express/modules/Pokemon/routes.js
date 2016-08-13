let express = require('express')
let Controller = require('./controller')
let router = express.Router()

/* GET users listing. */
router.get('/', Controller.getAll)
router.get('/:id', Controller.get)
router.put('/:id', Controller.put)
router.delete('/:id', Controller.delete)
router.post('/', Controller.create)

module.exports = router
