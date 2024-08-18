export interface BoardImageRequest {
  boardId: number;
  addr: string;
}

export interface ImageResponse {
  addr: string;
}

export interface ImageResponses {
  images: ImageResponse[];
}
