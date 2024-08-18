import {
  CommentCreateRequest,
  CommentUpdateRequest,
  CommentGetResponses,
} from '@/app/_types/comments';
import { handleApiRequest } from '../client';

// 특정 게시물의 댓글 조회 API
export const fetchCommentsByBoardId = async (boardId: number) => {
  return handleApiRequest<CommentGetResponses, 'get'>(`/comments/${boardId}`, 'get');
};

// 댓글 작성 API
export const createComment = async (boardId: number, commentData: CommentCreateRequest) => {
  return handleApiRequest<void, 'post', CommentCreateRequest>(
    `/comments/${boardId}`,
    'post',
    commentData,
  );
};

// 댓글 수정 API
export const updateComment = async (commentId: number, commentData: CommentUpdateRequest) => {
  return handleApiRequest<void, 'put', CommentUpdateRequest>(
    `/comments/${commentId}`,
    'put',
    commentData,
  );
};

// 댓글 삭제 API
export const deleteComment = async (commentId: number) => {
  return handleApiRequest<void, 'delete'>(`/comments/${commentId}`, 'delete');
};
