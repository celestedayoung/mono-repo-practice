import { handleApiRequest } from '../client';
import { Sidos } from '@/app/_types';

export const fetchSidos = async () => {
  return handleApiRequest<Sidos, 'get'>('/sidos', 'get');
};
