const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

// Setup connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'PlanIt',
  password: '111',
  port: 5432,
});

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  
      if (user.rows.length === 0) {
        return res.status(401).json({ success: false, message: 'Invalid email' });
      }
  
      if (user.rows[0].password !== password) {
        return res.status(401).json({ success: false, message: 'Incorrect password' });
      }

      const data = user.rows[0];
  
      res.json({
        email: data.email,
        name: data.name,
        username: data.username,
        gender: data.gender,
        date_of_birth: data.date_of_birth,
        joining_date: data.joining_date,
        theme: data.theme,
        notify: data.notify,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
});
  

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  
      if (userExists.rows.length > 0) {
        return res.status(400).json({ success: false, message: 'email already taken' });
      }
  
      await pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, password]);
      res.json({ success: true, message: 'Registration successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
