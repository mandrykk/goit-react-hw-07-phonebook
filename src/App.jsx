import './App.css';
import Phonebook from "./components/Phonebook/Phonebook";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";

import { useSelector} from 'react-redux';
import { getVisibleContacts } from './redux/phonebook-selectors';


export default function App() {
  const contactsCount = useSelector(getVisibleContacts);

  return (
    <div className="App">
      <Container title="Phonebook">
        <Phonebook />
      </Container>
      
     <Container title="Contacts">
        {contactsCount.length < 1 ? (
        <p>Contact list is empty ... 🙃</p>) : (<Filter />)}
        <Contacts />
      </Container>
    </div>
  );
}; 