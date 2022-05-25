import axios from 'axios';

axios.defaults.baseURL = 'https://628d1f1b3df57e983edc6358.mockapi.io/api';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export async function addContacts(contact) {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
};

export async function deleteContacts(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};