export interface CivilShelterResponse {
  id: number;
  sido: string;
  gugun: string;
  detailAddress: string;
  name: string;
  capacity: number;
  lat: number;
  lon: number;
}

export interface CivilShelterResponses {
  civilShelterResponses: CivilShelterResponse[];
}
