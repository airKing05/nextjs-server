const mongoose = require('mongoose');

const DATABASE = 'mongodb+srv://anilraj5:anilraj5@cluster0.l3lkl.mongodb.net/krashak01?retryWrites=true&w=majority'

mongoose.connect(DATABASE)
        .then((res) => console.log('server is connected to the database'))
        .catch(err => console.log('not able to connected to database reason='+ err))
        