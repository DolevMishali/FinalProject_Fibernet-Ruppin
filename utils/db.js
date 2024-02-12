// db.js

const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose.connect('mongodb://localhost:27017/reportsDB', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Connected to the MongoDB');
    });
}

module.exports = connectToDatabase;
