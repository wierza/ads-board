const mongoose = require('mongoose');
require('dotenv').config();

const connectToDB = () => {
    // Connecting to MongoDB
    let dbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@wierza.cd9ozgu.mongodb.net/NoticeBoard?retryWrites=true&w=majority`;

    mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

	// on success
	db.once('open', () => {
		console.log('Connected to the database');
	});

	// on error
	db.on('error', err => console.log('Error ' + err));
};

module.exports = connectToDB;