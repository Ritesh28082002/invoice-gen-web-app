import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // .env se backend URL

// ----------------- Backend Invoice APIs -----------------
export const getAllInvoices = (token) => {
    return axios.get(`${API_URL}/invoices`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const saveInvoice = (payload, token) => {
    return axios.post(`${API_URL}/invoices`, payload, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const deleteInvoice = (id, token) => {
    return axios.delete(`${API_URL}/invoices/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const sendInvoice = (formData, token) => {
    return axios.post(`${API_URL}/invoices/sendinvoice`, formData, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
