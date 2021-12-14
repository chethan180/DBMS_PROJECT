import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPosts = (formData) => API.post('/supd/',formData);
export const complaint = (formData) => API.post('/hst/',formData);
export const messremarks= (formData) => API.post('/smess/',formData);
export const wcomplaints = (formData) => API.post('/whst/',formData);
export const wupdates = (formData) => API.post('/wupdt/',formData);
export const review = (formData) => API.post('/feed/',formData);


export const signIn = (formData) => API.post('/auth/signin', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);

