import connection from '../config/db.js';

// Function to create the product table
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

// Function to add a product
export const addProduct = (name, price, quantity, supplierId) => {
  const query = 'INSERT INTO products (name, price, quantity, supplier_id) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, price, quantity, supplierId], (err, results) => {
    if (err) {
      console.error('Error adding product:', err.message);
      return;
    }
    console.log('Product added successfully.');
  });
};

// Function to get all products with supplier information
export const getProducts = (callback) => {
  const query = `
    SELECT p.id, p.name AS product_name, p.price, p.quantity, s.name AS supplier_name
    FROM products p
    LEFT JOIN suppliers s ON p.supplier_id = s.id
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving products:', err.message);
      return callback(err, null);
    }
    callback(null, results);
  });
};
