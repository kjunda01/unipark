import axios from "axios";

const API_URL = "https://6727abed270bd0b9755344ee.mockapi.io/api/Placas";

export const getPlacas = async () => {
  return axios.get(API_URL);
};

export const createPlaca = async (data) => {
  return axios.post(API_URL, data);
};

export const updatePlaca = async (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};

export const deletePlaca = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

