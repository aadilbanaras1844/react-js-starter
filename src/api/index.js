
export const apiHost = 'http://localhost:3001'
const storedUserKey = 'CurrentUser'

class ApiService {
  constructor() {
    this.apiUrl = `${apiHost}/api/v1`
  }

  get authInfo() {
    try {
      const storedUser = localStorage.getItem(storedUserKey)
      const data = storedUserKey ? JSON.parse(storedUser) : null
      return data;
    } catch (error) {
      return error;
    }
  }

  post = async (url, body, needAuth, token) => {
    try {
      const resp = await this.makeRequest({
        url,
        method: 'POST',
        body,
        needAuth,
        token,
      })
      return this.handleResponse(resp)
    } catch (error) {
    //   console.log(error)
      this.handleError(error)
      return Promise.reject(error)
    }
  }


  patch = async (url, body, needAuth, token) => {
    try {
      const resp = await this.makeRequest({
        url,
        method: 'PATCH',
        body,
        needAuth,
        token,
      })
      return this.handleResponse(resp)
    } catch (error) {
      // console.log(error)
      this.handleError(error)
      return Promise.reject(error)
    }
  }

  get = async (url, needAuth = true) => {
    try {
      const resp = await this.makeRequest({
        url,
        needAuth,
      })
      return this.handleResponse(resp)
    } catch (error) {
      console.log(error)
      this.handleError(error)
      return Promise.reject(error)
    }
  }
  delete = async url => {
    try {
      const resp = await this.makeRequest({
        url,
        method: 'DELETE',
      })
      return this.handleResponse(resp)
    } catch (error) {
      this.handleError(error)
      return Promise.reject(error)
    }
  }
  
  handleResponse = ({ data, status, error, message } = {}) => {
    if (data) {
      return {
        data,
        message
      }
    }
    return Promise.reject({
      ...error,
      ...{message},
    })
  }

  handleError = error => {
    // console.log(error)
  }

  makeRequest = async ({
    url = '',
    method = 'GET',
    body = null,
    needAuth = true,
    token = null,
  }) => {
    try {
      const fullUrl = `${this.apiUrl}/${url}`

      let headers = {
        'Content-Type': 'application/json',
      }

      if (needAuth) {
        const { username, token } = this.authInfo
        headers = {
          ...headers,
          'Authorization': token || username,
        }
      }

      const options = {
        method,
        headers,
      }

      if (method !== 'GET' && body) {
        options.body = JSON.stringify(body || {})
      }
      const response = await fetch(fullUrl, options)

      return response.json()
    } catch (error) {
    //   console.log(error, error.message)
      return Promise.reject(error)
    }
  }
}

export default ApiService
