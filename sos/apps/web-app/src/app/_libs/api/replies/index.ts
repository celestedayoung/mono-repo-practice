import { EmptyObj, ReplyRequest, Reply } from '@/app/_types';
import { handleApiRequest } from '../client';

export const fetchReplies = async (commentId: number) => {
  return handleApiRequest<Reply[], 'get'>(`/replies/${commentId}`, 'get');
};

export const createReply = async (commentId: number, memberId: number, data: ReplyRequest) => {
  return handleApiRequest<Reply, 'post', ReplyRequest>(
    `/replies/${commentId}?memberId=${memberId}`,
    'post',
    data,
  );
};

export const updateReply = async (replyId: number, data: ReplyRequest) => {
  return handleApiRequest<EmptyObj, 'put', ReplyRequest>(`/replies/${replyId}`, 'put', data);
};

export const deleteReply = async (replyId: number) => {
  return handleApiRequest<EmptyObj, 'delete'>(`/replies/${replyId}`, 'delete');
};
