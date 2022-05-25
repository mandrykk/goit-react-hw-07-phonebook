import './App.css';
import Phonebook from "./components/Phonebook/Phonebook";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";

import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from './redux/phonebook-selectors';
import { fetchContacts } from './redux/phonebook-operation';
import { useEffect } from 'react';

export default function App() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div className="App">
      <Container title="Phonebook">
        <Phonebook />
      </Container>
      
     <Container title="Contacts">
       <Filter/>
        {contacts.length < 1 ? (
          <p>Contact list is empty ... 🙃</p>) : (<Contacts />)}
      </Container>
    </div>
  );
};