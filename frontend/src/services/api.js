import axios from 'axios'

const api = axios.create({
    baseURL: 'https://3000-c2e12e81-4075-4473-97e1-41cfd64100a3.ws-us02.gitpod.io/'
})

export default api