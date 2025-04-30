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
        user_id: data.user_id,
        email: data.email,
        password : data.password,
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

app.get('/day-tasks', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const dayResult = await pool.query('SELECT id FROM day WHERE date = $1', [today]);
    const dayId = dayResult.rows[0]?.id;

    if (!dayId) {
      return res.status(404).json({ error: 'No tasks found for today.' });
    }

    const result = await pool.query('SELECT * FROM task WHERE day_id = $1', [dayId]);
    res.json(result.rows);
  } catch (err) {
    console.error("Error during database query:", err); // Log the error here
    res.status(500).json({ error: err.message });
  }
});

app.post('/day-tasks', async (req, res) => {
  const data = req.body;
  const today = new Date().toISOString().split('T')[0];

  try {
    const userExists = await pool.query('SELECT * FROM day WHERE date = $1', [today]);

    if (userExists.rows.length > 0) {
      await pool.query('DELETE FROM day WHERE date = $1', [today]);
    }

    const insertDayResult = await pool.query('INSERT INTO day (date) VALUES ($1) RETURNING id', [today]);
    const day = insertDayResult.rows[0].id;

    for (const hourObj of data) {
      if (!hourObj.hour || !Array.isArray(hourObj.slots)) continue;
    
      hourObj.slots.forEach(async (taskName, index) => {
        await pool.query(
          'INSERT INTO task (name, day_id, hour, num) VALUES ($1, $2, $3, $4)',
          [taskName, day, hourObj.hour, index]
        );
      });
    }

    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/savePreferences/:id', async (req, res) => {
  const userId = req.params.id;
  const { name, date_of_birth, gender, email, username, password, joining_date } = req.body;

  try {

    await pool.query(
      `UPDATE users
       SET name = $1,
           date_of_birth = $2,
           gender = $3,
           email = $4,
           username = $5,
           password = $6,
           joining_date = $7
       WHERE user_id = $8`,
      [name, date_of_birth, gender, email, username, password, joining_date, userId]
    );
    res.json({ success: true, message: 'Preferences saved' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/savePreferences-1/:id', async (req, res) => {
  const userId = req.params.id;
  const { theme, options } = req.body;

  try {

    await pool.query(
      `UPDATE users
       SET theme = $1,
           notify = $2
       WHERE user_id = $3`,
      [theme, options, userId]
    );
    res.json({ success: true, message: 'Preferences saved' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
