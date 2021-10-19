const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
// const ObjectId = require('mongodb').ObjectId

async function query(filterBy = {}) {
    try {
        const criteria = _buildCriteria(filterBy)

        const collection = await dbService.getCollection('msg')
        var msgs = await collection.find(criteria).toArray()
        console.log('from service', msgs)
        return msgs
    } catch (err) {
        logger.error('cannot find msgs', err)
        throw err
    }
}

async function add(msg) {
    try {
        const collection = await dbService.getCollection('msg')
        const addedMsg = await collection.insertOne(msg)
        return addedMsg
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