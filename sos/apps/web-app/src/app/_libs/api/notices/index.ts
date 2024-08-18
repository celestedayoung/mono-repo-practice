import { handleApiRequest } from '../client';
import { Notice, NoticeListResponse } from '@/app/_types/notices';
import { EmptyObj } from '@/app/_types';

export const fetchNotice = async (noticeId: number) => {
  return handleApiRequest<Notice, 'get'>(`/notices/${noticeId}`, 'get');
};

export const updateNotice = async (noticeId: number, memberId: number, data: Partial<Notice>) => {
  return handleApiRequest<EmptyObj, 'put', Partial<Notice>>(
    `/notices/${noticeId}?memberId=${memberId}`,
    'put',
    data,
  );
};

export const deleteNotice = async (noticeId: number, memberId: number) => {
  return handleApiRequest<EmptyObj, 'delete'>(
    `/notices/${noticeId}?memberId=${memberId}`,
    'delete',
  );
};

export const fetchNotices = async () => {
  return handleApiRequest<NoticeListResponse, 'get'>('/notices', 'get');
};

export const createNotice = async (memberId: number, data: Partial<Notice>) => {
  return handleApiRequest<Notice, 'post', Partial<Notice>>(
    `/notices?memberId=${memberId}`,
    'post',
    data,
  );
};

export const searchNotices = async (keyword: string) => {
  return handleApiRequest<NoticeListResponse, 'get'>(`/notices/search?keyword=${keyword}`, 'get');
};
