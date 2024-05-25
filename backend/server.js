const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(express.json()); // Using built-in Express JSON middleware
app.use(cors());

mongoose.connect('mongodb://localhost/rentify', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
