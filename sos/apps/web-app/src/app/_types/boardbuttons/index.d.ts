export interface BoardButtonRequest {
  boardId: number;
}

export interface BoardButtonResponse {
  id: number;
  boardId: number;
  memberId: number;
  type: string;
}
