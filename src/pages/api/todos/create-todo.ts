import type { NextApiRequest, NextApiResponse } from 'next';
import { getMongoDbConnection } from '@/utils/mongo/mongodb';

const createTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, marked } = req.body;

  let id, acknowledged;

  try {
    const mongoTodoDBConnection = await getMongoDbConnection();
    const todoCollection = mongoTodoDBConnection.collection('Todos');
    const result = await todoCollection.insertOne({ title, marked });

    id = result.insertedId;
    acknowledged = result.acknowledged;
  } catch (e) {
    console.log(e, acknowledged);
  } finally {
    return res.status(200).json({ id, title, marked });
  }
};

export default createTodo;
