export interface CommentCreateRequest {
  content: string;
}

export interface CommentUpdateRequest {
  content: string;
}

export interface ReplyGetResponse {
  id: number;
  memberLoginId: string;
  content: string;
  regDate: string; // ISO 형식의 날짜 문자열
}

export interface CommentGetResponse {
  id: number;
  memberLoginId: string;
  content: string;
  regDate: string; // ISO 형식의 날짜 문자열
  replies: ReplyGetResponse[];
}

export interface CommentGetResponses {
  commentGetResponses: CommentGetResponse[];
}
