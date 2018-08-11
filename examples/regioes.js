// Usando o folder de regioes

import APINordeste from '../API/regioes/nordeste'

export const getCitiesFromAPI = estado => {
  return APINordeste[estado].cidades;
};