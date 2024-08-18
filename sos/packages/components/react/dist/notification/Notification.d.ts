import { CommonProps } from '../common/types';
interface NotificationProps extends CommonProps {
    state: 'default' | 'warning' | 'danger';
    content: string;
    icon?: string;
}
/**
 * Notification 컴포넌트
 *
 * @param {'default' | 'warning' | 'danger'} props.state - 알림의 상태 (필수)
 * @param {string} props.content - 알림의 내용 (필수)
 * @param {string} [props.icon='warning'] - 아이콘 (선택, 기본값: 'warning')
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - 기타 HTML 속성
 */
export declare const Notification: import("react").ForwardRefExoticComponent<NotificationProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
