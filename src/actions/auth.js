
import { apiService as API } from '../index';

const storedUserKey = 'CurrentUser'

const setUser = payload => {
    const json = payload ? JSON.stringify(payload) : null
    if (json) {
      localStorage.setItem(storedUserKey, json)
    } else {
      localStorage.removeItem(storedUserKey)
    }
}
export const removeUser = payload => {
  localStorage.removeItem(storedUserKey)
}

export const checkAuth = () => {
    try {
      const storedUser = localStorage.getItem(storedUserKey)
      const data = storedUserKey ? JSON.parse(storedUser) : null
      return data;
    } catch (error) {
      return error;
    }
}


export const loginUser = async credentials => {
    try {
        const {'data':{ 
            token, 
            first_name, 
            last_name, 
            is_super_admin,
            is_staff,
            username,
        }, 'message': message} = await API.post('login', credentials, false);
        setUser({
            isLoggedIn: !!token,
            token,
            first_name,
            last_name,
            is_super_admin,
            is_staff,
            username
        });
        return {data: {token, first_name, last_name, is_super_admin, is_staff, username}, message: message};
    } catch (error) {
        return Promise.reject(error)
    }
}
