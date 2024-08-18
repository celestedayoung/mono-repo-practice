export interface Reply {
  id: number;
  memberId: string;
  content: string;
  regDate: string;
}

export interface ReplyRequest {
  content: string;
}

// 아래 무시

export interface CreateReplyVariables {
  commentId: number;
  memberId: number;
  data: ReplyRequest;
}

export interface UpdateReplyVariables {
  replyId: number;
  data: ReplyRequest;
}
