const mongoose = require('mongoose');

const DATABASE = process.env.DATABASE;

mongoose.connect(DATABASE)
        .then((res) => console.log('server is connected to the database'))
        .catch(err => console.log('not able to connected to database reason='+ err))
        