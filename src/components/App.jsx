import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/contactsSlice';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

const App = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(state => state.contacts);

  const handleAddContact = (name, number) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`Contact with name "${name}" already exists!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
