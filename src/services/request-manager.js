import { API_URL } from '../constants'
import fetch from 'node-fetch'

const requestManager = (title) => {
    return fetch(`${API_URL}&t=${title}`).then(res => {
        return res.json()
    })
}

export default requestManager