import { useMutation } from '@tanstack/react-query';
import { createBoard } from '@/app/_libs/api/boards';
import { handleSuccess, handleError } from '@/app/_libs/utils';
import { BoardCreateRequest, BoardResponse } from '@/app/_types';

export const useCreateBoard = () => {
  return useMutation<BoardResponse, Error, BoardCreateRequest>({
    mutationFn: (data: BoardCreateRequest) => createBoard(data),
    onSuccess: (data) => {
      handleSuccess('✅ 게시글이 성공적으로 생성되었습니다', data);
    },
    onError: (error) => {
      handleError('😥 게시글 생성에 실패했습니다', error);
    },
  });
};
