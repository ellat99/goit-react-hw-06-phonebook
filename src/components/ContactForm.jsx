import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/ContactSlide';
import { getContacts } from '../redux/Selectors';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts); //pt a extrage starea din store ul Redux in particular lista de contacte,folosin selectorul getContacts
  const handlerSubmit = e => {
    e.preventDefault();
    //extrage valorile nr si numelui introduse in formular
    const name = e.target.elements.name.value;
    //verifica daca numele contactului daca exista sau nu
    if (contacts.find(el => el.name === name)) {
      alert(name + ' already exists in the phone book');
      e.target.reset();
      return;
    }
    //daca nu exsita contactul ,creeaza un nou obiect de cotnact cu ID generat de nanoid
    const number = e.target.elements.number.value;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
    e.target.reset();
  };

  return (
    <div onSubmit={handlerSubmit}>
      <label htmlFor="name">Name </label>
      <input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="tel">Number </label>
      <input
        id="tel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <br />
      <button type="submit">Add contact</button>
    </div>
  );
}

export default ContactForm;
