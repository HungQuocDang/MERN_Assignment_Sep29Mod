const mongoose = require('mongoose');

//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhostgooglebooks');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/MERN_googlebook');

module.exports = mongoose.connection;
