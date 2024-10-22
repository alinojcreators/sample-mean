const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mean-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => console.error(err));

// Routes
app.get('/', (req, res) => {
    res.send('Hello from Express');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
