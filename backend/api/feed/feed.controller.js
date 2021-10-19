const feedService = require('./feed.service.js');
const logger = require('../../services/logger.service')

async function getMsgs(req, res) {
  try {
    var queryParams = req.query;
    const msgs = await feedService.query(queryParams)
    res.json(msgs);
  } catch (err) {
    logger.error('Failed to get msgs', err)
    res.status(500).send({ err: 'Failed to get msgs' })
  }
}

async function addMsg(req, res) {
  try {
    const msg = req.body;
    const addedMsg = await feedService.add(msg)
    res.json(addedMsg)
  } catch (err) {
    logger.error('Failed to add msg', err)
    res.status(500).send({ err: 'Failed to add msg' })
  }
}

module.exports = {
  getMsgs,
  addMsg,
}
