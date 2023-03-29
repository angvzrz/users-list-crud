import { Database } from './lib/db/types';

export type User = Database['public']['Tables']['users']['Row'];
export type Address = Database['public']['Tables']['addresses']['Row'];

export interface CreateUserBody {
  user: User;
  address: Address;
}

interface IEditUser extends Omit<Partial<User>, 'id' | 'address'> {}
interface IEditAddress extends Omit<Partial<Address>, 'id'> {}
export interface IEditUserData {
  user?: IEditUser;
  address?: IEditAddress;
}
