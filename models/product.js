import connection from '../config/db.js';

export const createProductTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      quantity INT NOT NULL,
      supplier_id INT,
      FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
    )
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error creating products table:', err.message);
      return;
    }
    console.log('Products table created successfully.');
  });
};
