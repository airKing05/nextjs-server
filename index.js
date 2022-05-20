const dotenv = require('dotenv');
const express = require('express');
const path = require('path');

const app = express();

// console.log(path)

// for the enviormental variable
//require('dotenv').config();
// {path: path.join(__dirname, '.config/.env')}   //>>> need to set in side the config()

dotenv.config({ path: './config.env' });
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