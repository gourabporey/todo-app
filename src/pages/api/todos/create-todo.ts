import type { NextApiRequest, NextApiResponse } from 'next';

const createTodo = (req: NextApiRequest, res: NextApiResponse) => {
  const { title, marked } = req.body;
  const id = Date.now().toString();
  return res.status(200).json({ id, title, marked });
};

export default createTodo;
