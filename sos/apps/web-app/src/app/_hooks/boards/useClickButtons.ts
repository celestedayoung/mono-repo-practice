import { useMutation } from '@tanstack/react-query';
import { clickFactButton, clickReportButton } from '@/app/_libs';
import { handleSuccess, handleError } from '@/app/_libs';
import { BoardButtonRequest, BoardButtonResponse } from '@/app/_types';

export const useClickFactButton = () => {
  return useMutation<BoardButtonResponse, Error, BoardButtonRequest>({
    mutationFn: (boardId) => clickFactButton(boardId),
    onSuccess: (data) => {
      handleSuccess('✅ Fact button clicked successfully', data);
    },
    onError: (error) => {
      handleError('😥 Failed to click fact button', error);
    },
  });
};

export const useClickReportButton = () => {
  return useMutation<BoardButtonResponse, Error, BoardButtonRequest>({
    mutationFn: (boardId) => clickReportButton(boardId),
    onSuccess: (data) => {
      handleSuccess('✅ Report button clicked successfully', data);
    },
    onError: (error) => {
      handleError('😥 Failed to click report button', error);
    },
  });
};
