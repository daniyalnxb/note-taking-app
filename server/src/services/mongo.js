const mongoose = require('mongoose');

async function connectMongo() {
    const url = process.env.MONGO_URL;
    if(!url) {
        console.warn('MONGO_URL not set. Skipping MongoDB Connection.');
        return;
    }

    await mongoose.connect(url);
    console.log('MongoDB connected!');
};

async function disconnectMongo() {
    await mongoose.disconnect();
}

module.exports = { connectMongo, disconnectMongo };
