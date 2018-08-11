// Usando o folder estados

import API from '../API/estados'

export const getCitiesFromAPI = estado => {
  return API[estado].cidades;
};