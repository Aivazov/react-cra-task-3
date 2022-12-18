import axios from 'axios';

axios.defaults.baseURL = 'https://639e2a6a3542a26130580f84.mockapi.io';

export const addMaterial = async (values) => {
  const response = await axios.post('/materials', values);
  return response.data;
};
