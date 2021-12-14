import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPosts = (formData) => API.post('/supd/',formData);
export const complaint = (formData) => API.post('/hst/',formData);
export const messremarks= (formData) => API.post('/smess/',formData);
export const wcomplaints = (formData) => API.post('/whst/',formData);
export const wupdates = (formData) => API.post('/wupd/',formData);
export const review = (formData) => API.post('/feed/',formData);
export const solv = (formData) => API.post('/solv/',formData);
export const allot = (formData) => API.post('/allot',formData);
export const aL = (formData) => API.post('/out',formData);
export const eM = (formData) => API.post('/empty',formData);

export const signIn = (formData) => API.post('/auth/signin', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);

