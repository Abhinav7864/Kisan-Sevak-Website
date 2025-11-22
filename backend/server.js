// Express server setup for soil database connection
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


// Connect to MySQL database (update credentials as needed)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // change if your MySQL user is different
  password: 'swing2', // add your MySQL password if set
  database: 'agritech'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});


// Create soil table and insert dummy data if not exists
const createTableAndSeed = () => {

  const createTableQuery = `CREATE TABLE IF NOT EXISTS soil (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Nitrogen VARCHAR(20),
    Phosphorous VARCHAR(20),
    Potassium VARCHAR(20),
    PH_Level VARCHAR(10),
    Electrical_Conductivity VARCHAR(20),
    Moisture VARCHAR(20),
    Temperature VARCHAR(20)
  )`;
  db.query(createTableQuery, (err) => {
    if (err) {
      console.error('Error creating table', err);
    } else {
      db.query('SELECT COUNT(*) as count FROM soil', (err, results) => {
        if (!err && results[0].count === 0) {
          const insertQuery = `INSERT INTO soil (Nitrogen, Phosphorous, Potassium, PH_Level, Electrical_Conductivity, Moisture, Temperature) VALUES 
            ('High', 'Medium', 'Low', '6.5', '0.8', '20%', '28C'),
            ('Medium', 'High', 'Medium', '7.0', '1.0', '25%', '30C'),
            ('Low', 'Low', 'High', '5.8', '0.6', '15%', '26C')`;
          db.query(insertQuery);
        }
      });
    }
  });
};

createTableAndSeed();

// API endpoint to get all soil data
app.get('/api/soil', (req, res) => {
  db.query('SELECT * FROM soil', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      // Convert all values to strings
      const result = results.map(row => ({
        Nitrogen: String(row.Nitrogen),
        Phosphorous: String(row.Phosphorous),
        Potassium: String(row.Potassium),
        PH_Level: String(row.PH_Level),
        Electrical_Conductivity: String(row.Electrical_Conductivity),
        Moisture: String(row.Moisture),
        Temperature: String(row.Temperature)
      }));
      res.json(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
