const pool = require('../config/db');

// Get all contacts
const getAllContacts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts ORDER BY id ASC');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

// Add a new contact
const addContact = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO contacts ("firstName", "lastName", email, "phoneNumber", company, "jobTitle") 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [firstName, lastName, email, phoneNumber, company, jobTitle]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add contact' });
  }
};

// Update a contact
const updateContact = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
  try {
    const result = await pool.query(
      `UPDATE contacts SET "firstName" = $1, "lastName" = $2, "email" = $3, "phoneNumber" = $4, "company" = $5, "jobTitle" = $6 
       WHERE "id" = $7 RETURNING *`,
      [firstName, lastName, email, phoneNumber, company, jobTitle, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update contact' });
  }
};

// Delete a contact
const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM contacts WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete contact' });
  }
};

module.exports = {
  getAllContacts,
  addContact,
  updateContact,
  deleteContact,
};
