import { httpService } from './http.service'
import { md5 } from 'crypto-js/md5'

export const feedService = {
    query,
    addMsg
}

async function query(filterBy) {
    try {
        var queryStr = (!filterBy) ? '' : `?txt=${filterBy}`;
        const msgs = await httpService.get(`feed${queryStr}`)
        return msgs
    } catch (err) {
        throw err
    }
}

async function addMsg(email, txt) {
    try {
        const hashedEmail = md5(email);
        console.log('hashed email', hashedEmail)
        const imgUrl = `https://www.gravatar.com/avatar/${hashedEmail}`
        const msg = { email, msg: txt, imgUrl }
        const addedMsg = await httpService.post('feed', msg)
        return addedMsg
    } catch (err) {
        throw err
    }
}
