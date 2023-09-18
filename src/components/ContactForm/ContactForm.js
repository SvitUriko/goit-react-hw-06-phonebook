import { Formik } from 'formik';
import {
  Btn,
  Input,
  Label,
  LabelValue,
  StyledForm,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  console.log('Contacts:', contacts);

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        if (!values.name || !values.number) {
          alert(`${values.name} or entered number is already in contacts.`);
          return;
        }

        !contacts.find(
          ({ name }) => name.toLowerCase() === values.name.toLowerCase()
        ) && dispatch(addContact(values));

        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          <LabelValue>Name</LabelValue>
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          <LabelValue>Number</LabelValue>
          <Input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Btn type="submit">Add contact</Btn>
      </StyledForm>
    </Formik>
  );
};
