import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { useContactContext } from "../Context/ContactContext";

const EditContact = ({ theme }) => {

    const { state: contact } = useLocation();
    // Access contact details passed via state
    const { updateContact, setFormData } = useContactContext();

    React.useEffect(() => {
        if (contact) {
            setFormData({
                firstName: contact.firstName,
                lastName: contact.lastName,
                email: contact.email,
                phoneNumber: contact.phoneNumber,
                company: contact.company,
                jobTitle: contact.jobTitle,
            });
        }
    }, [contact, setFormData]);

    const handleSubmit = async (id, formData) => {
        updateContact(id, formData);
    };

    return (
        <div>
            <h2>Edit Contact</h2>
            <ContactForm
                onSubmit={handleSubmit}
                theme={theme}
                id={contact.id}
            />
        </div>
    );
};

export default EditContact;
