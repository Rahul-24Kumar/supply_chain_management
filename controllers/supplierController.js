// controllers/supplierController.js
import { createSupplierTable } from '../models/supplier.js';
import connection from '../config/db.js';

export const initializeSuppliers = () => {
  createSupplierTable();
};

export const addSupplier = (name, contactEmail) => {
  const query = 'INSERT INTO suppliers (name, contact_email) VALUES (?, ?)';
  connection.query(query, [name, contactEmail], (err, results) => {
    if (err) {
      console.error('Error adding supplier:', err.message);
      return;
    }
    console.log('Supplier added successfully.');
  });
};
