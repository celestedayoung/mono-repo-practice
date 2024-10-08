import { CommonProps } from '../common/types';
interface ChipsProps extends CommonProps {
    size: 's' | 'm' | 'l';
    variant: 'primary' | 'secondary';
    state: 'default' | 'outline' | 'active' | 'disabled';
    onClick?: () => void;
}
/**
 * Chips 컴포넌트
 *
 * @param {'s' | 'm' | 'l'} props.size - 칩의 크기 (필수, 기본값: 'm')
 * @param {'primary' | 'secondary'} props.variant - 칩의 변형 스타일 (필수, 기본값: 'primary')
 * @param {'default' | 'outline' | 'active' | 'disabled'} props.state - 칩의 상태 (필수, 기본값: 'default')
 * @param {string} props.content - 칩에 표시될 텍스트 내용 (필수, 기본값: 'Label')
 * @param {() => void} props.onClick - 칩을 클릭했을 때 호출되는 함수 (선택)
 */
export declare const Chips: import("react").ForwardRefExoticComponent<ChipsProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
