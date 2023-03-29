import { Address, CreateUserBody, IEditUserData, User } from '@/types';
import axios from 'axios';

const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL!;

export async function getUsers() {
  const response = await axios.get<User[]>(`${baseUrl}/api/users`);
  return response.data;
}

export async function getUser(id: number) {
  const response = await axios.get<User>(`${baseUrl}/api/users/${id}`);
  return response.data;
}

export async function editUser(id: number, newData: IEditUserData) {
  await axios.put(`${baseUrl}/api/users/${id}`, newData);
}

export async function deleteUser(id: number) {
  await axios.delete(`${baseUrl}/api/users/${id}`);
}

export async function createUser(user: User, address: Address) {
  const requestBody: CreateUserBody = {
    user,
    address,
  };
  await axios.post(`${baseUrl}/api/users/create`, requestBody);
}
