import axios from "axios";

const API_URL = "https://670436afab8a8f892733500d.mockapi.io/placa";

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
