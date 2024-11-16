const validateContact = (req, res, next) => {
    const { firstName, lastName, email, phoneNumber } = req.body;
  
    if (!firstName || !lastName || !email || !phoneNumber) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
  
    next();
  };
  
  module.exports = validateContact;
  