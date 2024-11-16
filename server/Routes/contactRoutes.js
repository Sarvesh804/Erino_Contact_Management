const express = require('express');
const contactController = require('../Controllers/contactController');
const validateContact = require('../Middleware/validateContact');

const router = express.Router();


router.get('/', contactController.getAllContacts);

router.post('/', validateContact, contactController.addContact);

router.put('/:id', validateContact, contactController.updateContact);

router.delete('/:id', contactController.deleteContact);

module.exports = router;
