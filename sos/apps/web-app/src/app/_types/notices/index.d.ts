export interface Notice {
  id: number;
  title: string;
  content: string;
  status: string;
}

export interface NoticeListResponse {
  noticeResponses: Notice[];
}
