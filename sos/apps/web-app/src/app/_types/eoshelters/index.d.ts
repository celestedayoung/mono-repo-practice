export interface EOShelterResponse {
  id: number;
  sido: string;
  gugun: string;
  detailAddress: string;
  name: string;
  lat: number;
  lon: number;
  tel: string;
}

export interface EOShelterResponses {
  eoShelterResponses: EOShelterResponse[];
}
