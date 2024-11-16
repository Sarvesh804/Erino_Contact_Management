import React,{useState} from 'react';
import ContactForm from '../components/ContactForm';
import { useContactContext } from '../Context/ContactContext';
import TransitionWrapper from '../TransitionWrapper';

const AddContact = ({theme}) => {
    const { formData,setContacts,resetFormData} = useContactContext();

  const handleSubmit = async () => {
  
  try {
    const response = await fetch('http://localhost:5000/api/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData), 
    });
    console.log(formData);
    if (response.ok) {
      const newContact = await response.json();
      setContacts((prev) => [...prev, newContact]); 
      alert('Contact added successfully!');
      resetFormData();
    } else {
      const error = await response.json();
      console.log(error)
      alert(error.message || 'Failed to add contact.');
    }
  } catch (err) {
    console.error(err);
    alert('An error occurred while adding the contact.');
  }
};
 

    return (
        <TransitionWrapper maxWidth='lg'>
            <ContactForm onSubmit={handleSubmit} theme={theme}/>
        </TransitionWrapper>
    )

};

export default AddContact;
