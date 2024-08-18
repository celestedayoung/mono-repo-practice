import { handleApiRequest } from '../client';
import { Guguns } from '@/app/_types';

export const fetchGuguns = async (sidoId: number) => {
  return handleApiRequest<Guguns, 'get'>(`/guguns/${sidoId}`, 'get');
};
