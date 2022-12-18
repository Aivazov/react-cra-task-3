import axios from 'axios';

axios.defaults.baseURL = 'https://639e2a6a3542a26130580f84.mockapi.io';

export const addMaterial = async (values) => {
  const response = await axios.post('/materials', values);
  return response.data;
};

export const getMaterials = async () => {
  const response = await axios.get('/materials');
  return response.data;
};

export const removeMaterial = async (id) => {
  const response = await axios.delete(`/materials/${id}`);
  return response.data;
};

export const updateMaterial = async (fields) => {
  const response = await axios.put(`/materials/${fields.id}`, fields);
  return response.data;
};
