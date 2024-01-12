import type { NextApiRequest, NextApiResponse } from 'next';
import { getMongoDbConnection } from '@/utils/mongo/mongodb';
import { ObjectId } from 'mongodb';

const createTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { marked } = req.body;
  let result;

  try {
    const mongoTodoDBConnection = await getMongoDbConnection();
    const todoCollection = mongoTodoDBConnection.collection('Todos');
    result = await todoCollection.updateOne(
      { _id: new ObjectId(id as string) },
      { $set: { marked } }
    );
  } catch (e) {
    console.log(e);
  } finally {
    return res.status(200).json(result);
  }
};

export default createTodo;
