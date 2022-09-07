const express = require('express')
const router = express.Router()
const collectionController = require('../controllers/collection')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, collectionController.getCollection)

module.exports = router