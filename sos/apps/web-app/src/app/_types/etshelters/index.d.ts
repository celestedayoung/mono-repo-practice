export interface ETShelterResponse {
  id: number;
  sido: string;
  gugun: string;
  detailAddress: string;
  name: string;
  capacity: number;
  lat: number;
  lon: number;
  tel: string;
}

export interface ETShelterResponses {
  etShelterResponses: ETShelterResponse[];
}
