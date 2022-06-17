const { Router } = require('express')
const ProjectController = require('../controllers/ProjectController')

const router = Router()

router.get('/', ProjectController.listProjects)
router.post('/', ProjectController.createProject)

module.exports = router