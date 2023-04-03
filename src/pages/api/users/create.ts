import supabase from '@/lib/db/supabase';
import { ICreateUserBody } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { user, address }: ICreateUserBody = req.body;
  const newId: number = Math.abs(crypto.getRandomValues(new Int32Array(1))[0]);
  user.id = newId;
  user.address = user.id;
  address.id = user.id;

  const { error: addressError } = await supabase
    .from('addresses')
    .insert(address);

  if (addressError) {
    res.json({ address_error: addressError?.message });
  }

  const { error: userError } = await supabase.from('users').insert(user);

  if (userError) {
    res.status(500).json({ user_error: userError.message });
  }

  res.status(201).json('User created');
}
