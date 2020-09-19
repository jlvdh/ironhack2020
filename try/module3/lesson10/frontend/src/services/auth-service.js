// auth/auth-service.js
 
import axios from 'axios';
 
class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:4000/',
      withCredentials: true
    });
    this.service = service;
  }

  loggedin = () => {
    return this.service.get('/auth/loggedin')
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/auth/login', {username, password})
    .then(response => response.data)
  }
   
  logout = () => {
    return this.service.post('/auth/logout', {})
    .then(response => response.data)
  }

  signup = (username, password) => {
    return this.service.post('/auth/signup', {username, password})
    .then(response => response.data)
  }
  
  editProfile = (user) => {
    return this.service.post('/auth/editprofile', user)
    .then(response => response.data)
  }
 
  addProfileImage = (image) => {
    return this.service.post('/auth/profileimage', image)
    .then(response => response.data)
  }
}
 
export default AuthService;
