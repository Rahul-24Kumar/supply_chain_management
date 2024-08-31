import express from 'express';
import dotenv from 'dotenv';
import supplierRoutes from './routes/supplierRoutes.js';
import productRoutes from './routes/productRoutes.js';
import { createSupplierTable } from './models/supplier.js';
import { createProductTable } from './models/product.js';

dotenv.config();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize tables
createSupplierTable();
createProductTable();

// Use the routes
app.use('/api', supplierRoutes);
app.use('/api', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
