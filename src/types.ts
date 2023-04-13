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

type IUserNewData = Omit<Partial<User>, 'id' | 'address'>;
type IAddressNewData = Omit<Partial<Address>, 'id'>;
export interface IProfileNewData {
  user?: IUserNewData;
  address?: IAddressNewData;
}
