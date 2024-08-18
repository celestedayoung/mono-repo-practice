export interface FollowRequest {
  followerId: number;
}

export interface FollowNickNameRequest {
  followerId: number;
  nickName: string;
}

export interface FollowResponse {
  id: number;
  memberId: string;
  nickName: string;
  save: boolean;
}

export interface FollowResponses {
  followResponses: FollowResponse[];
}

export interface FollowPhoneResponse {
  phone: string;
}
