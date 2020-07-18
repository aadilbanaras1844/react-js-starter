


import { apiService as API } from '../index';

export const getStaffs = async () => {
    try {
        const leads = await API.get('users', true);
        return leads;
    } catch (error) {
        return Promise.reject(error)
    }
}

export const deleteStaff = async (id) => {
    try {
        const leads = await API.delete('users/'+id, true);
        return leads;
    } catch (error) {
        return Promise.reject(error)
    }
}

export const addStaff = async params => {
    try {
        const data = await API.post('users/staff', params, true);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
}

export const updateStaff = async (id,params) => {
    try {
        const data = await API.patch('users/'+id, params, true);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
}

export const getUser = async (id) => {
    try {
        const lead = await API.get('users/'+id, true);
        return lead;
    } catch (error) {
        return Promise.reject(error)
    }
}