const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();       // .env file ki values load karo
connectDB();           // MongoDB se connect karo

const app = express();

app.use(cors());              // Frontend ko backend se baat karne do
app.use(express.json());     // Incoming JSON data ko samajhne ke liye

// Test route - check karne ke liye server chal raha hai ya nahi
app.get('/', (req, res) => {
    res.send('CampusConnect API is running...');
});

// Event related routes yahan connect honge
app.use('/api/events', require('./routes/eventRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});