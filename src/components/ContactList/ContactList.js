import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <>
      {contacts.length > 0 && (
        <List>
          {contacts.map(({ id, name, number }) => {
            return <ContactItem key={id} name={name} number={number} />;
          })}
        </List>
      )}
    </>
  );
};
