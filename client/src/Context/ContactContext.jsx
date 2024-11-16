import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const ContactContext = createContext();

export const useContactContext = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]); // Stores the list of contacts
  const [formData, setFormData] = useState({
    id:'',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: '',
  });

   // Function to fetch all contacts from the database
   const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/contacts'); // Adjust the endpoint as per your setup
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      const data = await response.json();
      console.log(data)
      setContacts(data); // Update contacts state
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

    // Function to update a contact
    const updateContact = async (id, updatedData) => {
      console.log(updatedData);
      console.log(id);
      try {
        const response = await fetch(`http://localhost:5000/api/contacts/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        });
        if (!response.ok) {
          throw new Error('Failed to update contact');
        }
        const updatedContact = await response.json();
        setContacts((prevContacts) =>
          prevContacts.map((contact) =>
            contact.id === id ? { ...contact, ...updatedContact } : contact
          )
        );
        resetFormData();
        navigate("/contact-list");
      } catch (error) {
        console.error('Error updating contact:', error);
      }
    };
  
    // Function to delete a contact
    const deleteContact = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/api/contacts/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete contact');
        }
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact.id !== id)
        );
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    };

  // Call fetchContacts on component mount
  useEffect(() => {
    fetchContacts();
  }, []);

  const resetFormData = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '',
      jobTitle: '',
    });
  };


  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        formData,
        setFormData,
        resetFormData,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
