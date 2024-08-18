export interface AEDRequest {
  lat: number;
  lon: number;
  radius: number;
}

export interface AEDResponse {
  id: number;
  sido: string;
  gugun: string;
  detailAddress: string;
  buildPlace: string;
  lat: number;
  lon: number;
  tel: string;
}

export interface AEDResponses {
  aedResponses: AEDResponse[];
}
