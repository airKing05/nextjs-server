const dotenv = require('dotenv');
const express = require('express');
const app = express();


// for the enviormental variable
require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json())
app.use('/api/user', require('./routes/auth'));
app.use('/api/product', require('./routes/product'));
require('./db/connect');


app.get('/', (req, res) => {
    res.json({"message": "Hello word"})
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})