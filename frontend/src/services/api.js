import axios from 'axios'

const api = axios.create({
    baseURL: 'https://3000-f5b10168-49e9-4ada-afa7-21408eb7ab2f.ws-us02.gitpod.io/'
})

export default api