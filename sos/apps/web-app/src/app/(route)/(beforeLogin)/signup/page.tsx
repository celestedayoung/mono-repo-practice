'use client';
import { useState, useEffect, FormEventHandler, ChangeEventHandler } from 'react';
import { Button, InputGroup, Container } from '@sos/components-react';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [newId, setNewId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [nickname, setNickname] = useState('');
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // 모든 필드가 채워졌는지 확인하여 폼 유효성 상태를 업데이트
    const isFormComplete =
      newId &&
      newPassword &&
      confirmNewPassword &&
      newPhoneNumber &&
      nickname &&
      isPhoneVerified &&
      verificationCode;

    setIsFormValid(isFormComplete as boolean);
    console.log('Form Valid:', isFormComplete);
  }, [
    newId,
    newPassword,
    confirmNewPassword,
    newPhoneNumber,
    nickname,
    isPhoneVerified,
    verificationCode,
  ]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    console.log(newId, newPassword, confirmNewPassword, newPhoneNumber, nickname);
    router.push('/');
  };

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 8) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const handleChangePhoneNumber: ChangeEventHandler<HTMLInputElement> = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setNewPhoneNumber(formattedPhoneNumber);
  };

  const handlePhoneRequest = () => {
    // 여기에 인증 요청 로직
    setIsPhoneVerified(true);
    console.log('Phone Verified');
  };

  const handleVerificationCodeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setVerificationCode(e.target.value);
  };

  return (
    <>
      <Container
        as="form"
        display="flex"
        flexDirection="column"
        paddingX={16}
        paddingY={56}
        gap={16}
        onSubmit={handleSubmit}
      >
        <InputGroup
          state="default"
          placeholder="아이디를 입력하세요"
          buttonText="중복확인"
          showLabel={true}
          labelContent="아이디"
          value={newId}
          onChange={(e) => setNewId(e.target.value)}
          buttonType="button"
        />
        <InputGroup
          state="default"
          placeholder="숫자, 특수문자를 포함한 8자 이상"
          type="password"
          showLabel={true}
          showButton={false}
          showPasswordToggle={true}
          labelContent="비밀번호"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <InputGroup
          state="default"
          placeholder="비밀번호를 입력하세요"
          type="password"
          showLabel={true}
          showButton={false}
          showPasswordToggle={true}
          labelContent="비밀번호 확인"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        <InputGroup
          state="default"
          placeholder="휴대폰 번호를 입력하세요"
          showLabel={true}
          showButton={true}
          buttonText="인증요청"
          labelContent="휴대전화"
          value={newPhoneNumber}
          onChange={handleChangePhoneNumber}
          onButtonClick={handlePhoneRequest}
          buttonType="button"
        />
        <InputGroup
          state={isPhoneVerified ? 'default' : 'disabled'}
          placeholder="인증번호를 입력하세요"
          showLabel={true}
          showButton={true}
          buttonText="인증확인"
          labelContent="휴대전화 인증번호"
          value={verificationCode}
          onChange={handleVerificationCodeChange}
          // buttonDisabled={!isPhoneVerified}
          // inputDisabled={!isPhoneVerified}
          buttonType="button"
        />
        <InputGroup
          state="default"
          placeholder="닉네임을 입력하세요"
          showLabel={true}
          showButton={false}
          showStar={false}
          labelContent="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Container display="flex" paddingTop={56}>
          <Button size="m" type="submit" disabled={!isFormValid}>
            {'시작하기'}
          </Button>
        </Container>
      </Container>
    </>
  );
}
