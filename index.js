// index.js  

const express = require('express');  
const bodyParser = require('body-parser');  
const cors = require('cors');  

// Initialize the Express application  
const app = express();  
const PORT = process.env.PORT || 3000;  

// Middleware  
app.use(cors()); // Enable CORS  
app.use(bodyParser.json()); // Parse JSON requests  

// Sample route  
app.get('/', (req, res) => {  
    res.send('Welcome to the Node.js API!');  
});  

// Start the server  
app.listen(PORT, () => {  
    console.log(`Server is running on http://localhost:${PORT}`);  
});  