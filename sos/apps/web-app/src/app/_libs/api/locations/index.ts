import { AEDResponses } from '@/app/_types/aeds';
import { handleApiRequest } from '../client';
import { CivilShelterResponses } from '@/app/_types/civilshelters';
import { EOShelterResponses } from '@/app/_types/eoshelters';
import { ETShelterResponses } from '@/app/_types/etshelters';

// 위치 기반 AED 조회 API
export const fetchAED = async (lat: number, lon: number, radius: number) => {
  return handleApiRequest<AEDResponses, 'get'>(
    `/locations/aed?lat=${lat}&lon=${lon}&radius=${radius}`,
    'get',
  );
};

// 위치 기반 CivilShelter 조회 API
export const fetchCivilShelters = async (lat: number, lon: number, radius: number) => {
  return handleApiRequest<CivilShelterResponses, 'get'>(
    `/locations/civilshelter?lat=${lat}&lon=${lon}&radius=${radius}`,
    'get',
  );
};

// 위치 기반 EOShelter 조회 API
export const fetchEOShelters = async (lat: number, lon: number, radius: number) => {
  return handleApiRequest<EOShelterResponses, 'get'>(
    `/locations/eoshelter?lat=${lat}&lon=${lon}&radius=${radius}`,
    'get',
  );
};

// 위치 기반 ETShelter 조회 API
export const fetchETShelters = async (lat: number, lon: number, radius: number) => {
  return handleApiRequest<ETShelterResponses, 'get'>(
    `/locations/etshelter?lat=${lat}&lon=${lon}&radius=${radius}`,
    'get',
  );
};
