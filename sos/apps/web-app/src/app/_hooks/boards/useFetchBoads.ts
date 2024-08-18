import { useQuery } from '@tanstack/react-query';
import { fetchLatestBoards, searchBoards, fetchTopFactBoards } from '@/app/_libs/api/boards';
import { BoardResponses, Board } from '@/app/_types';

// Board 타입을 확장하여 isFact 속성을 추가합니다.
type BoardWithFact = Board & { isFact?: boolean };

export const useFetchBoards = (
  searchTerm?: string,
  lastBoardId?: number,
  limitPage: number = 10,
) => {
  const isClient = typeof window !== 'undefined';

  return useQuery<BoardResponses, Error>({
    queryKey: ['boards', searchTerm, lastBoardId, limitPage],
    queryFn: async () => {
      const topFactBoards = await fetchTopFactBoards();
      let otherBoards: BoardResponses;

      if (searchTerm) {
        otherBoards = await searchBoards(searchTerm);

        // 검색 결과에 팩트 게시물이 포함되어 있는지 확인
        const hasFactInSearchResult = otherBoards.boardResponses.some((board) =>
          topFactBoards.boardResponses.some((factBoard) => factBoard.id === board.id),
        );

        // 검색 결과에 팩트 게시물이 포함되어 있지 않으면 검색 결과만 반환
        if (!hasFactInSearchResult) {
          return {
            boardResponses: otherBoards.boardResponses.map((board) => ({
              ...board,
              isFact: false,
            })),
            totalCount: otherBoards.boardResponses.length,
            hasNext: otherBoards.boardResponses.length === limitPage,
          };
        }
      } else {
        otherBoards = await fetchLatestBoards(lastBoardId, limitPage);
      }

      // Fact 게시물에 isFact 속성을 추가합니다.
      const factBoardsWithMark: BoardWithFact[] = topFactBoards.boardResponses.map((board) => ({
        ...board,
        isFact: true,
      }));

      // 중복 제거 및 결과 조합
      const combinedBoards: BoardWithFact[] = [
        ...factBoardsWithMark,
        ...otherBoards.boardResponses
          .filter((board) => !factBoardsWithMark.some((factBoard) => factBoard.id === board.id))
          .map((board) => ({ ...board, isFact: false })),
      ];

      return {
        boardResponses: combinedBoards,
        totalCount: combinedBoards.length,
        hasNext: otherBoards.boardResponses.length === limitPage,
      };
    },
    enabled: isClient ? !!localStorage.getItem('accessToken') : false,
  });
};
