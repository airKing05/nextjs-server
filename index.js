const express = require('express');
const app = express();

// require('./config/process.env');
PORT = process.env.PORT || 3005;

app.use(require('./routes/auth'));
require('./db/connect');


app.get('/', (req, res) => {
    res.json({"message": "Hello word"})
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})