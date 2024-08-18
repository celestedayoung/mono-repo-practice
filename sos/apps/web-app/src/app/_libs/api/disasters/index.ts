import { DisasterResponses, DisasterResponse } from '@/app/_types/disasters';
import { handleApiRequest } from '../client';

// 모든 재난 조회 API
export const fetchAllDisasters = async () => {
  return handleApiRequest<DisasterResponses, 'get'>('/disasters', 'get');
};

// id로 특정 재난 조회 API
export const fetchDisasterById = async (id: number) => {
  return handleApiRequest<DisasterResponse, 'get'>(`/disasters/${id}`, 'get');
};

// 지역별 재난 조회 API
export const fetchDisastersByLocation = async (location: string) => {
  return handleApiRequest<DisasterResponses, 'get'>(`/disasters/${location}`, 'get');
};

// 사용자 재난 조회 API
export const fetchUserDisasters = async () => {
  return handleApiRequest<DisasterResponses, 'get'>('/disasters/users', 'get');
};
