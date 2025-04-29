import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
export type roomDto = {
  _id: string;
  block: 'block1' | 'block2' | 'block3' | 'block4';
  floor: number;
  room: number;
  status: 'empty' | 'broned' | 'selled';
};
const api = axios.create({
  baseURL: 'http://185.217.131.96:1818/',
  headers: {
    Accept: 'application/x-www-form-urlencoded',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

export default api;

const getAll = async (): Promise<roomDto[]> => {
  const response = await api.get('rooms');
  return response.data;
};

export const useGetAll = () => {
  return useQuery({ queryKey: ['all'], queryFn: getAll });
};

const update = async (data: { status: string; id: string }) => {
  const response = await api.put(`rooms/status`, { ...data });
  return response.data;
};

export const useUpdate = () => {
  return useMutation({ mutationFn: update });
};

const getbyId = async (id: string) => {
  const response = await api.get(`rooms/${id}`);
  return response.data;
};

export const useGetById = (id: string) => {
  return useQuery({ queryKey: ['id', id], queryFn: () => getbyId(id) });
};
