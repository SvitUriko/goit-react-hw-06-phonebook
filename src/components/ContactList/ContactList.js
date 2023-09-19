import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  return (
    <>
      {contacts && contacts.length > 0 && (
        <List>
          {contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, number }) => (
              <ContactItem key={id} id={id} name={name} number={number} />
            ))}
        </List>
      )}
    </>
  );
};
