import {
  Member,
  MemberUpdatePasswordRequest,
  MemberUpdateInfoRequest,
  MemberSearchResponses,
} from '@/app/_types/members';
import { handleApiRequest } from '../client';

export const fetchMemberInfo = async () => {
  return handleApiRequest<Member, 'get'>('/members', 'get');
};

// 비밀번호 변경 API
export const updateMemberPassword = async (data: MemberUpdatePasswordRequest) => {
  return handleApiRequest<void, 'put', MemberUpdatePasswordRequest>(
    '/members/password',
    'put',
    data,
  );
};

// 회원 정보 수정 API
export const updateMemberInfo = async (data: MemberUpdateInfoRequest) => {
  return handleApiRequest<void, 'put', MemberUpdateInfoRequest>('/members/info', 'put', data);
};

// 회원 탈퇴 API
export const deleteMember = async () => {
  return handleApiRequest<void, 'delete'>('/members/withdraw', 'delete');
};

// 회원 검색 API
// 회원 ID나 닉네임으로 검색하면 id랑 loginId랑 nickname 반환해줌
export const searchMember = async (searchKeyword: string) => {
  return handleApiRequest<MemberSearchResponses, 'get'>(
    `/members/search?searchKeyword=${searchKeyword}`,
    'get',
  );
};

// 회원 안전 설정 API
export const safeMember = async () => {
  return handleApiRequest<void, 'post'>('/members/safe', 'post');
};
