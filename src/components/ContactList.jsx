import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/Selectors';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filterWord = useSelector(getFilter);
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterWord)
  );

  return (
    <div>
      {visibleContacts.map(({ name, id, number }) => (
        <ContactItem id={id} key={id} number={number} name={name} />
      ))}
    </div>
  );
}

export default ContactList;
