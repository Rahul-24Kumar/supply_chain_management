import connection from '../config/db.js';

export const createSupplierTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS suppliers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      contact_email VARCHAR(255) NOT NULL
    )
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error creating suppliers table:', err.message);
      return;
    }
    console.log('Suppliers table created successfully.');
  });
};
