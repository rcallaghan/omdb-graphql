import { API_URL } from '../constants'
import fetch from 'node-fetch'

const requestManager = (string, queryType = "&i=") => {
    return fetch(`${API_URL}${queryType}${string}`).then(res => {
        return res.json()
    })
}

export default requestManager