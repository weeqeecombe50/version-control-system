const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to our server! Enjoy your stay!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});