import axios from 'axios';

const API_URL = 'https://localhost:7162/api'; // URL do backend

// Login
export const login = async (email, senha) => {
  return axios.post(`${API_URL}/Usuario/login`, { email, senha });
};

// Cadastro de usuário
export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/Usuario`, userData);
};

// Listar meses
export const getMeses = async () => {
  return axios.get(`${API_URL}/Mes`);
};

// Cadastrar novo mês
export const createMes = async (mesData) => {
  return axios.post(`${API_URL}/Mes`, mesData);
};

// Logout (invalidar token)
export const logout = async (token) => {
  return axios.post(`${API_URL}/Usuario/logout`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  });
};