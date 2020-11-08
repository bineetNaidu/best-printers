import { NextApiRequest, NextApiResponse } from 'next';
import Axios from '../../../axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
  } = req;

  const { data } = await Axios.get(`/printers/${id}`);
  res.status(200).json(data);
}
