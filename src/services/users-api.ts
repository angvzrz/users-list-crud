import { Address, CreateUserBody, IEditUserData, User } from '@/types';
import axios from 'axios';

export async function getUsers() {
  const response = await axios.get<User[]>('/api/users');
  return response.data;
}

export async function getUser(id: number) {
  const response = await axios.get<User>(`/api/users/${id}`);
  return response.data;
}

export async function editUser(id: number, newData: IEditUserData) {
  await axios.put(`/api/users/${id}`, newData);
}

export async function deleteUser(id: number) {
  await axios.delete(`/api/users/${id}`);
}

export async function createUser(user: User, address: Address) {
  const requestBody: CreateUserBody = {
    user,
    address,
  };
  await axios.post('/api/users/create', requestBody);
}
