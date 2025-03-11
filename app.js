const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Gunakan rute
app.use('/', userRoutes);

// Rute root
app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to MVC' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});