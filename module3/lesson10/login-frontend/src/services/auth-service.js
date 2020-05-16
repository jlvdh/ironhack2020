import axios from 'axios'

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true
    })
    //this.service = service
  }

  signup = (username, password) => {
    return this.service.post('/auth/signup', {username, password})
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/auth/login', {username, password})
    .then(response => response.data)
  }

  isAuthenticated = () => {
    return this.service.get('/auth/isLoggedIn')
    .then(response => response.data)
  }

}

export default AuthService