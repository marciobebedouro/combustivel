import axios from 'axios';
const url = 'url_fack.com';

export const registerFuelStation = async entity => {
  try {
    const response = await axios.post('${url}/fuelstation`, entity');
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
};

export const updateStation = async (id, entity) => {
  try {
    const reponse = await axios.put(`${url}/fuelstation/${id}`);
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteFuelStation = async () => {
  try {
    const response = await axios.delete(`${url}/fuelstation/${id}`);
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
};

export const zipCode = async cep => {
  const urlCep = `https://viacep.com.br/ws/${cep}/json/`;
  try {
    const response = await axios.get(urlCep);
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
};

export const getAllFuelStation = async () => {
  try {
    const response = await axios.get(`${url}/fuelstation`);
    const { data } = response;
  } catch (error) {
    return error;
  }
};
