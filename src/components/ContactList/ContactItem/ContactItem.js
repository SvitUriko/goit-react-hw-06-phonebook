import { useDispatch } from 'react-redux';
import { Item, Text, Btn } from './ContactItem.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item id={id}>
      <Text>
        {name}: {number}
      </Text>
      <Btn
        type="button"
        name="delete"
        onClick={() => {
          const action = deleteContact(id);
          console.log(action);
          dispatch(action);
        }}
      >
        Delete
      </Btn>
    </Item>
  );
};
