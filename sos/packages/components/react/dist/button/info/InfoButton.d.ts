import { CommonProps } from '../../common/types';
import { InfoButtonVariants } from './style.css';
import { BadgeVariants } from '../../badge/style.css';
interface InfoButtonProps extends CommonProps, NonNullable<InfoButtonVariants> {
    badgeColor?: NonNullable<BadgeVariants>['color'];
    badgeText?: string;
    subText?: string;
}
/**
 * InfoButton 컴포넌트
 *
 * @param {React.ReactNode} [props.children='children'] - 버튼 내부 텍스트 (선택, 기본값: 'children')
 * @param {InfoButtonVariants['size']} props.size - 버튼 크기 ('s', 'm')
 * @param {InfoButtonVariants['variant']} [props.variant='default'] - 버튼 변형 (선택, 기본값: 'default')
 * @param {InfoButtonProps['badgeColor']} [props.badgeColor] - 배지 색상 (선택)
 * @param {string} [props.badgeText] - 배지 텍스트 (선택)
 * @param {string} [props.subText] - 부가 텍스트 (선택)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - 버튼 요소로 전달될 기타 props
 * @param {React.Ref<HTMLButtonElement>} ref - 전달받은 ref
 */
export declare const InfoButton: import("react").ForwardRefExoticComponent<InfoButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
