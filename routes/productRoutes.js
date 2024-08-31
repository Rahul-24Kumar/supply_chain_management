// routes/productRoutes.js
import express from 'express';
import { addProduct, getProducts } from '../controllers/productController.js';

const router = express.Router();

// Route to add a new product
router.post('/products', (req, res) => {
  const { name, price, quantity, supplierId } = req.body;
  addProduct(name, price, quantity, supplierId);
  res.status(201).send('Product added successfully.');
});

// Route to get all products with supplier information
router.get('/products', (req, res) => {
  getProducts((err, results) => {
    if (err) {
      res.status(500).send('Error retrieving products.');
      return;
    }
    res.json(results);
  });
});

export default router;
