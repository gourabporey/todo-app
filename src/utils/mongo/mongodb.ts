import { MongoClient } from 'mongodb';
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'your-mongo-uri';
let mongoClient: MongoClient;

const getMongoDbConnection = async () => {
  if (!mongoClient) {
    mongoClient = new MongoClient(MONGO_URI);
    await mongoClient.connect();
  }

  return mongoClient.db('TodoApp');
};

export { getMongoDbConnection };
