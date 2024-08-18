import { CommonProps } from '../common/types';
/**
 * Badge 컴포넌트
 *
 * @param {React.ReactNode} [props.children='text'] - 배지 내부 텍스트 (선택, 기본값: 'text')
 * @param {BadgeVariants['size']} [props.size='m'] - 배지 크기 (선택, 기본값: 'm')
 * @param {BadgeVariants['color']} [props.color='blue'] - 배지 색상 (선택, 기본값: 'blue', 선택지: 'blue', 'pink', 'orange', 'green', 'white', 'ghost')
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - Container 컴포넌트로 전달될 기타 props
 * @param {React.Ref<HTMLElement>} ref - 전달받은 ref
 */
export declare const Badge: import("react").ForwardRefExoticComponent<Omit<CommonProps, "color"> & {
    size?: "s" | "m" | "l" | undefined;
    color?: "blue" | "green" | "orange" | "pink" | "white" | "ghost" | "ghostWhite" | undefined;
} & import("react").RefAttributes<HTMLElement>>;
