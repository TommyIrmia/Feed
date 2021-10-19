const express = require('express')
const { log } = require('../../middlewares/logger.middleware')
const { getMsgs, addMsg } = require('./feed.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getMsgs)
router.post('/', addMsg)

module.exports = router