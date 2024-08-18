export interface Board {
  id: number;
  title: string;
  memberId: string;
  createdAt: string;
  address: string;
  count: number;
  commentNum: number;
  content: string;
  factCnt: number;
  reportCnt: number;
  isFact: boolean;
}

export interface BoardItemProps {
  board: Board;
  routeToPath: (boardId: number) => void;
  handleFactClick: (boardId: number) => void;
  handleReportClick: (boardId: number) => void;
  isFact: boolean;
}

export interface BoardResponse {
  board: Board;
}

export interface BoardResponses {
  boardResponses: Board[];
  totalCount: number;
  hasNext: boolean;
}

export interface BoardCreateRequest {
  title: string;
  content: string;
  sido: string;
  gugun: string;
  address: string;
}

export interface BoardUpdateRequest {
  title?: string;
  content?: string;
}

export interface Response<T> {
  success: boolean;
  data: T;
  message: string;
}
