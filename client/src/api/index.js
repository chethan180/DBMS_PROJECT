import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPosts = (formData) => API.post('/supd/',formData);
export const complaint = (formData) => API.post('/hst/',formData);
export const messremarks= (formData) => API.post('/smess/',formData);
// export const createPost = (formData) => API.post('/smess/',formData);
// export const fetchleaves = (formData) => API.post('/hst/',formData);

// export const fetchHodPost = (formData) => API.post('/whst/',formData);
// export const approvePost  = (formData) => API.post('/wupd/',formData);