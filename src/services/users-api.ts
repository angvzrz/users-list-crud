import { IProfileNewData, UserFullData } from '@/types';
import axios from 'axios';

const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL!;

export async function getUsers() {
  const response = await axios.get<UserFullData[]>(`${baseUrl}/api/users`);
  return response.data;
}

export async function getUser(id: number) {
  const response = await axios.get<UserFullData>(`${baseUrl}/api/users/${id}`);
  return response.data;
}

export async function deleteUser(id: number) {
  await axios.delete(`${baseUrl}/api/users/${id}`);
}

export async function editUser(id: number, newData: IProfileNewData) {
  await axios.put(`${baseUrl}/api/users/${id}`, newData);
}

export async function createUser(newData: IProfileNewData) {
  await axios.post(`${baseUrl}/api/users/create`, newData);
}
