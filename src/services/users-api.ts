import { IProfileNewData, UserFullData } from '@/types';
import axios from 'axios';

export async function getUsers() {
  const response = await axios.get<UserFullData[]>(`/api/users`);
  return response.data;
}

export async function getUser(id: number) {
  const response = await axios.get<UserFullData>(`/api/users/${id}`);
  return response.data;
}

export async function deleteUser(id: number) {
  await axios.delete(`/api/users/${id}`);
}

export async function editUser(id: number, newData: IProfileNewData) {
  await axios.put(`/api/users/${id}`, newData);
}

export async function createUser(newData: IProfileNewData) {
  await axios.post(`/api/users/create`, newData);
}
