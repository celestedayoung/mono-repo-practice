export interface Member {
  id: number;
  loginId: string;
  name: string;
  nickname: string;
  phone: string;
  oauthType: string;
  role: string;
}

export interface MemberInfoResponse {
  id: number;
  loginId: string;
  name: string;
  nickname: string;
  phone: string;
  oauthType: string;
  role: string;
}

export interface MemberUpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface MemberUpdateInfoRequest {
  nickname: string;
  phone: string;
}

export interface MemberSearchRequest {
  searchKeyword: string;
}

export interface MemberSearchInfo {
  id: number;
  loginId: string;
  nickname: string;
}

export interface MemberSearchResponses {
  memberSearchInfos: MemberSearchInfo[];
}
