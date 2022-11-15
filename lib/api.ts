import { DICTIONARIES } from './constants'
import { Dictionary } from './types'
import axios from 'axios'

const api = {
    dictionaries: {
        fetch: async (locale): Promise<Dictionary> =>
            DICTIONARIES[locale] || DICTIONARIES['default'],
    },
    board: {
        fetch: async (locale): Promise<string> => {
            const language = languages[locale] || 'en'
            return await axios.get(`https://api.fifa.com/api/v3/calendar/17/255711/285063/standing?IdGroup=285072&language=${language}`)
                .then(({ data }) => {
                    return data?.Results
                })
        },
    },
}

const languages = {
    kr: 'ko',
}


export default api
