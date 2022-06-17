const { Router } = require('express')
const UserController = require('../controllers/UserController')

const router = Router()

router.get('/', UserController.listUsers)
router.post('/', UserController.create)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.deleteUser)

module.exports = router