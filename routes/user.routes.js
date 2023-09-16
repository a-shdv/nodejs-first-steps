const Router = require('express')
const userController = require('../controllers/user.controller.js')

const router = new Router()

router.post('/users', userController.createUser)
router.get('/users', userController.getUsers)
router.get('/users/:id', userController.getUserById)
router.put('/users', userController.updateUser);
router.delete('/users/:id', userController.deleteUser)

module.exports = router