const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')

async function query(filterBy = {}) {
    try {
        const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('msg')
        var msgs = await collection.find(criteria).toArray()
        msgs.reverse()
        return msgs
    } catch (err) {
        logger.error('cannot find msgs', err)
        throw err
    }
}

async function add(msg) {
    try {
        const collection = await dbService.getCollection('msg')
        await collection.insertOne(msg)
        return msg
    } catch (err) {
        logger.error('cannot insert msg', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.txt) {
        const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
        criteria.$or = [
            {
                email: txtCriteria
            },
            {
                msg: txtCriteria
            }
        ]
    }
    return criteria
}

module.exports = {
    query,
    add,
}