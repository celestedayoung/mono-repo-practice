import { CommonProps } from '../../common/types';
interface MessageListProps extends Omit<CommonProps, 'color'> {
    title?: string;
    date: string;
    content: string;
    isRead: boolean;
    isChecked: boolean;
    following: string;
    variant: 'default' | 'danger' | 'warning';
    mode: 'default' | 'round';
}
/**
 * MessageList 컴포넌트
 *
 * @param {string} props.title - 메시지 제목 (선택)
 * @param {Date} props.date - 메시지 날짜 (필수)
 * @param {string} props.content - 메시지 내용 (필수)
 * @param {boolean} props.isRead - 읽음 여부 (필수)
 * @param {boolean} props.isChecked - 체크 여부 (필수)
 * @param {string} props.following - 팔로잉 상태 (필수)
 * @param {'default' | 'danger' | 'warning'} props.variant - 메시지 타입 (필수)
 * @param {'default' | 'round'} props.mode - 메시지 모드 (필수)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - 기타 HTML 속성
 * @param {React.Ref<HTMLElement>} ref - 전달받은 ref
 */
export declare const MessageList: import("react").ForwardRefExoticComponent<MessageListProps & import("react").RefAttributes<HTMLElement>>;
export {};
