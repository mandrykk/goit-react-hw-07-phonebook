import axios from 'axios';

axios.defaults.baseURL = 'https://628937c210e93797c163afcb.mockapi.io/contacts/';

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