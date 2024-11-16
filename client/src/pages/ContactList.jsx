import React, { useState } from 'react';
import ContactsTable from '../components/ContactsTable';
import TransitionWrapper from '../TransitionWrapper';
import { useContactContext } from '../Context/ContactContext';
import { useNavigate } from 'react-router-dom';

const ContactList = () => {
    const {contacts,setContacts,deleteContact} = useContactContext();
    const navigate = useNavigate();
    console.log(contacts)
    const handleDelete = (id) => {
        deleteContact(id);
    };

    const handleEdit = (contact) => {
        navigate(`/edit-contact/`, { state: contact }); // Pass contact details via state
    };

    return (
        <TransitionWrapper maxWidth='lg'>
            <ContactsTable contacts={contacts} onDelete={handleDelete} onEdit={handleEdit} />
        </TransitionWrapper>
    );
};

export default ContactList;
