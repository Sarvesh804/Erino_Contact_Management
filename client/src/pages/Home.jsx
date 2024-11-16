import React, { useState } from 'react';
import { Container } from '@mui/material';
import ContactForm from '../components/ContactForm';
import ContactsTable from '../components/ContactsTable';

const Home = ({theme}) => {
//   const [contacts, setContacts] = useState([]);

//   const handleAddContact = (newContact) => {
//     setContacts([...contacts, { ...newContact, id: Date.now() }]);
//   };

//   const handleDeleteContact = (id) => {
//     setContacts(contacts.filter((contact) => contact.id !== id));
//   };

//   const handleEditContact = (contact) => {
//     console.log('Edit contact:', contact);
//   };

  return (
    // <Container maxWidth="lg" sx={{ marginTop: 4 }}>
    //   <ContactForm onSubmit={handleAddContact} />
    //   <ContactsTable contacts={contacts} onDelete={handleDeleteContact} onEdit={handleEditContact} />
    // </Container>

    <div style={{width:"100%", height:"100%",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <h3 style={{padding:"0",margin:"0",fontSize:"7rem", fontFamily:"sans-serif" ,fontWeight:"800", background: "linear-gradient(45deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 1))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>Welcome To Erino</h3>
        <h3 style={{padding:"0",margin:"0",fontSize:"6rem", fontFamily:"sans-serif" , fontWeight:"800", background:"linear-gradient(45deg, #FF7E00, #FFC700, #FF0000)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>Contact Management</h3>
    </div>
  );
};

export default Home;
