import supabase from '@/lib/db/supabase';
import { User } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await supabase.from('users').select('*');

  if (error) {
    res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
}
