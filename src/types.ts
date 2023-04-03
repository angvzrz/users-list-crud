import { Database } from './lib/db/types';

export type User = Database['public']['Tables']['users']['Row'];
export type Address = Database['public']['Tables']['addresses']['Row'];

export interface ICreateUserBody {
  user: User;
  address: Address;
}

export interface UserFullData extends Omit<User, 'address'> {
  address: Address;
}

interface IUserNewData extends Omit<Partial<User>, 'id' | 'address'> {}
interface IAddressNewData extends Omit<Partial<Address>, 'id'> {}
export interface IProfileNewData {
  user?: IUserNewData;
  address?: IAddressNewData;
}
