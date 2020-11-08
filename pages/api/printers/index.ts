import { NextApiRequest, NextApiResponse } from 'next';
import Axios from '../../../axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await Axios.get('/printers');
  res.status(200).json(data);
};
