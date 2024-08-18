import { CommonProps } from '../types';
import { vars } from '@sos/style-tokens';
interface DividerProps extends Pick<CommonProps, 'color'>, Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
    orientation: 'horizontal' | 'vertical';
    size?: keyof typeof vars.spacing.spacing;
    margin?: keyof typeof vars.spacing.spacing;
}
/**
 * Divider 컴포넌트
 *
 * @param {'horizontal' | 'vertical'} [props.orientation='horizontal'] - 구분선의 방향 (선택, 기본값: 'horizontal')
 * @param {PaletteColors} [props.color='gray200'] - 구분선의 색상 (선택, 기본값: 'gray200')
 * @param {keyof typeof vars.spacing.spacing} [props.size=1] - 구분선의 두께 (선택, 기본값: 1)
 * @param {keyof typeof vars.spacing.spacing} [props.margin] - 구분선의 여백 (선택)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...React.HTMLAttributes<HTMLElement>} props - 기타 HTML 속성
 * @param {React.Ref<HTMLHRElement>} ref - 전달받은 ref
 */
export declare const Divider: import("react").ForwardRefExoticComponent<DividerProps & import("react").RefAttributes<HTMLHRElement>>;
export {};
