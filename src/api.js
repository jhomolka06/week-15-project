import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = () => axios.get(API_URL);
export const createPost = (post) => axios.post(API_URL, post);
export const updatePost = (postId, post) => axios.put(`${API_URL}/${postId}`, post);
export const deletePost = (postId) => axios.delete(`${API_URL}/${postId}`);