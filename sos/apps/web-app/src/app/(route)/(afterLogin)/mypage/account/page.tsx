'use client';

import { Container, InputGroup } from '@sos/components-react';

export default function Account() {
  const userData = {
    email: '000@gmail.com',
    name: 'name',
    password: '●●●●●●●●',
    phone: '000-0000-0000',
    nickname: 'nick name',
  };

  return (
    <Container display="flex" flexDirection="column" padding={16} gap={16}>
      <InputGroup
        state="disabled"
        labelContent="이메일"
        defaultValue={userData.email}
        showButton={false}
        showStar={false}
      />
      <InputGroup
        state="disabled"
        labelContent="이름"
        defaultValue={userData.name}
        showButton={false}
        showStar={false}
      />
      <InputGroup
        state="readonly"
        labelContent="비밀번호"
        type="password"
        defaultValue={userData.password}
        buttonText="수정하기"
        showStar={false}
      />
      <InputGroup
        state="disabled"
        labelContent="휴대전화"
        defaultValue={userData.phone}
        showButton={false}
        showStar={false}
      />
      <InputGroup
        state="readonly"
        labelContent="닉네임"
        buttonText="수정하기"
        defaultValue={userData.nickname}
        showButton={true}
        showStar={false}
      />
    </Container>
  );
}
