import express from 'express';
import { addSupplier } from '../controllers/supplierController.js';

const router = express.Router();

// Route to add a new supplier
router.post('/suppliers', (req, res) => {
  const { name, contactEmail } = req.body;
  addSupplier(name, contactEmail);
  res.status(201).send('Supplier added successfully.');
});

export default router;
