import axios from 'axios'

const port = ''
const proto = 'https'
const host = 'movienotes-api-ooft.onrender.com'

export const api = axios.create({
  baseURL: `${proto}://${host}`,
})
