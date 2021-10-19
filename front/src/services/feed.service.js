import { httpService } from './http.service'
import md5 from 'crypto-js/md5'

export const feedService = {
    query,
    addMsg
}

async function query(filterBy) {
    try {
        var queryStr = (!filterBy) ? '' : `?txt=${filterBy}`;
        return await httpService.get(`feed${queryStr}`)
    } catch (err) {
        throw err
    }
}

async function addMsg(msg) {
    try {
        const { email, txt } = msg
        console.log('from service', msg);
        const msgToAdd = {
            email,
            msg: txt,
            imgUrl: _getImgUrl(email)
        }
        return await httpService.post('feed', msgToAdd)
    } catch (err) {
        throw err
    }
}

function _getImgUrl(email) {
    const hashedEmail = md5(email);
    const imgUrl = `https://www.gravatar.com/avatar/${hashedEmail}?d=mp`
    return imgUrl
}