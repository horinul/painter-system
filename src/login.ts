import axios from 'axios'
// axios.defaults.baseURL = 'http://121.5.165.83:3000/api'
axios.interceptors.request.use(
  res => {
    res.headers.authorization = localStorage['token']
    return res
  },
  err => {
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    return Promise.reject(err)
  }
)
export let loginApi = (account, password) => {
  return axios.post('/login', { account, password })
}
export let valiApi = () => {
  return axios.post('/validate')
}
