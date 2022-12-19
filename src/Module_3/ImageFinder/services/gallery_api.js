import axios from 'axios';

const API_KEY = '31522217-1daa00f4dac69c1e930d1cd07';
const PAGES = 'per_page=12';
let page = 1;

axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export const getImages = async () => {
  const response = await axios.get();
  return response.data;
};
