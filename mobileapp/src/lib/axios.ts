import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.8.51:3333'
})