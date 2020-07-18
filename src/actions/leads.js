

import { apiService as API } from '../index';

export const getLeads = async () => {
    try {
        const leads = await API.get('leads', true);
        return leads;
    } catch (error) {
        return Promise.reject(error)
    }
}

export const deleteLead = async (id) => {
    try {
        const leads = await API.delete('leads/'+id, true);
        return leads;
    } catch (error) {
        return Promise.reject(error)
    }
}

export const addLead = async params => {
    try {
        const data = await API.post('leads', params, true);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
}

export const updateLead = async (id,params) => {
    try {
        const data = await API.patch('leads/'+id, params, true);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
}

export const getLead = async (id) => {
    try {
        const lead = await API.get('leads/'+id, true);
        return lead;
    } catch (error) {
        return Promise.reject(error)
    }
}