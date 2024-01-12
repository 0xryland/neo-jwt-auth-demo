// lib/db.js

const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');
let dbInstance = null;

const connectToDatabase = async () => {
  await client.connect();
  dbInstance = client.db('NEO');
};

const getDb = () => {
  if (!dbInstance) {
    throw new Error('Must connect to Database first!');
  }
  return dbInstance;
};

module.exports = { connectToDatabase, getDb };
