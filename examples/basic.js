// Usando o arquivo API.js

import API from '../API/API'

export const getCitiesFromAPI = estado => {
  return API[estado].cidades;
};