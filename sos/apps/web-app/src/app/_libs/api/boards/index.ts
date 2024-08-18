import {
  EmptyObj,
  BoardCreateRequest,
  BoardUpdateRequest,
  BoardResponse,
  BoardResponses,
  Board,
} from '@/app/_types';
import { BoardButtonRequest, BoardButtonResponse } from '@/app/_types/boardbuttons';
import { handleApiRequest } from '../client';

// 최신 게시판 목록을 가져오는 API
// 처음에 다른곳에서 불러올때 const data = fetchLatestBoards(); 이런식으로 전체 데이터 불러오고
// 숫자가 클수록 최신글목록임 그래서 거꾸로 숫자 넣어주면서 페이징 처리하면 됨
export const fetchLatestBoards = async (lastBoardId?: number, limitPage: number = 10) => {
  const query = lastBoardId
    ? `?lastBoardId=${lastBoardId}&limitPage=${limitPage}`
    : `?limitPage=${limitPage}`;
  return handleApiRequest<BoardResponses, 'get'>(`/boards${query}`, 'get');
};

// 특정 게시판을 가져오는 API
export const fetchBoardById = async (boardId: number) => {
  return handleApiRequest<Board, 'get'>(`/boards/${boardId}`, 'get');
};

// 게시판을 생성하는 API
// 생성할 때 아래와 같은 형식으로 넣으세요
//   const newBoardData = {
//     title: '예시 제목',
//     content: '김민수 빨리 퇴근해!!!!!!!! 010999911111',
//     lat: 37.5665,
//     lon: 126.978,
//     sido: '서울특별시',
//     gugun: '성북구',
//     address: '서울특별시 성북구 ~~~',
//   };
// sido, gugun 형식 안맞추면 에러나니까 조심
export const createBoard = async (data: BoardCreateRequest) => {
  return handleApiRequest<BoardResponse, 'post', BoardCreateRequest>(`/boards`, 'post', data);
};

// 게시판을 수정하는 API
export const updateBoard = async (boardId: number, data: BoardUpdateRequest, memberId: number) => {
  return handleApiRequest<BoardResponse, 'put', BoardUpdateRequest>(
    `/boards/${boardId}?memberId=${memberId}`,
    'put',
    data,
  );
};

// 게시판을 삭제하는 API
export const deleteBoard = async (boardId: number, memberId: number) => {
  return handleApiRequest<EmptyObj, 'delete'>(`/boards/${boardId}?memberId=${memberId}`, 'delete');
};

// 키워드로 게시판을 검색하는 API
export const searchBoards = async (
  keyword: string,
  lastBoardId?: number,
  limitPage: number = 10,
) => {
  const query = lastBoardId
    ? `?keyword=${keyword}&lastBoardId=${lastBoardId}&limitPage=${limitPage}`
    : `?keyword=${keyword}&limitPage=${limitPage}`;
  return handleApiRequest<BoardResponses, 'get'>(`/boards/search${query}`, 'get');
};

// 회원 ID로 게시판을 검색하는 API
export const searchBoardsByMemberId = async (
  memberId: number,
  lastBoardId?: number,
  limitPage: number = 10,
) => {
  const query = lastBoardId
    ? `?lastBoardId=${lastBoardId}&limitPage=${limitPage}`
    : `?limitPage=${limitPage}`;
  return handleApiRequest<BoardResponses, 'get'>(`/boards/member/${memberId}${query}`, 'get');
};

// 시/도로 게시판을 검색하는 API
export const searchBoardsBySido = async (
  sido: string,
  lastBoardId?: number,
  limitPage: number = 10,
) => {
  const query = lastBoardId
    ? `?sido=${sido}&lastBoardId=${lastBoardId}&limitPage=${limitPage}`
    : `?sido=${sido}&limitPage=${limitPage}`;
  return handleApiRequest<BoardResponses, 'get'>(`/boards/sido${query}`, 'get');
};

// 게시판 fact 버튼 클릭 API
export const clickFactButton = async (request: BoardButtonRequest) => {
  return handleApiRequest<BoardButtonResponse, 'post', BoardButtonRequest>(
    '/boards/fact',
    'post',
    request,
  );
};

// 게시판 report 버튼 클릭 API
export const clickReportButton = async (request: BoardButtonRequest) => {
  return handleApiRequest<BoardButtonResponse, 'post', BoardButtonRequest>(
    '/boards/report',
    'post',
    request,
  );
};

// 핫 게시물 3개 조회 API
export const fetchTopFactBoards = async () => {
  return handleApiRequest<BoardResponses, 'get'>('/boards/topfact', 'get');
};
