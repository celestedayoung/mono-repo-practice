import {
  FollowNickNameRequest,
  FollowResponse,
  FollowResponses,
  FollowPhoneResponse,
} from '@/app/_types/follows';
import { handleApiRequest } from '../client';

// 팔로우 진행 API
export const createFollower = async (followerId: number) => {
  return handleApiRequest<void, 'post'>(`/follows?followerId=${followerId}`, 'post');
};

// 팔로워 조회 API
export const fetchFollowers = async () => {
  return handleApiRequest<FollowResponses, 'get'>('/follows/followers', 'get');
};

// 팔로워 검색 API
// 아무것도 안넣고 검색하면 그냥 조회처럼 다나옴
// 만약에 팔로워중에 'kts'라는 별명이 있을때
// k만 쳐서 보내줘도 잘나옴
export const searchFollowers = async (nickName: string) => {
  return handleApiRequest<FollowResponses, 'get'>(
    `/follows/followers/search?nickName=${nickName}`,
    'get',
  );
};

// 팔로잉 조회 API
export const fetchFollowings = async () => {
  return handleApiRequest<FollowResponses, 'get'>('/follows/followings', 'get');
};

// 팔로잉 검색 API
// 여기도 팔로워랑 똑같은 방식으로 하면 됨
export const searchFollowings = async (nickName: string) => {
  return handleApiRequest<FollowResponses, 'get'>(
    `/follows/followings/search?nickName=${nickName}`,
    'get',
  );
};

// 팔로잉 닉네임 수정 API
// 여기는 나중에 수정좀 해야될거같은데 일단
// 팔로잉 한사람의 닉네임 예를 들어서 'kts'라면 얘의 followId가 3임
// request에 넣어줘야 할게 followId와 변경할 NickName임 예시 참고
export const updateFollowNickName = async (data: FollowNickNameRequest) => {
  return handleApiRequest<FollowResponse, 'post', FollowNickNameRequest>(
    '/follows/nickname',
    'post',
    data,
  );
};

// 팔로잉 번호 조회 API
// 맞팔되있어야 번호줌
export const fetchFollowNumber = async (followerId: number) => {
  return handleApiRequest<FollowPhoneResponse, 'get'>(
    `/follows/phone?followerId=${followerId}`,
    'get',
  );
};
