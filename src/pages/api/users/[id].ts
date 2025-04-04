import supabase from '@/lib/db/supabase';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  if (method === 'GET') {
    const { data, error } = await supabase
      .from('users')
      .select('*, address:addresses(*)')
      .eq('id', id)
      .single();

    if (error) {
      res.status(500).json({ error: error.message });
    }

    if (!data) {
      res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(data);
  } else if (method === 'PUT') {
    const { body } = req;

    const { error: updateUserError } = await supabase
      .from('users')
      .update(body.user)
      .eq('id', id)
      .single();

    if (updateUserError) {
      return res.status(500).json({ error: updateUserError?.message });
    }

    const { error: updateAddressError } = await supabase
      .from('addresses')
      .update(body.address)
      .eq('id', id)
      .single();

    if (updateAddressError) {
      return res.status(500).json({ error: updateAddressError?.message });
    }

    res.status(200).json('User data updated');
  } else if (method === 'DELETE') {
    const { error: deleteError } = await supabase
      .from('users')
      .delete()
      .eq('id', id);

    if (deleteError) {
      res.status(500).json({ error: deleteError.message });
    }

    res.status(200).json('User deleted');
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
