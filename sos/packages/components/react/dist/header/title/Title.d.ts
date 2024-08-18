import { CommonProps } from '../../common/types';
/**
 * Title 컴포넌트
 *
 * @param {React.ReactNode} props.children - 제목 내용 (필수)
 * @param {PaletteColors} [props.color='textNormal'] - 제목 색상 (선택, 기본값: 'textNormal')
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - 기타 HTML 속성
 * @param {React.Ref<HTMLElement>} ref - 전달받은 ref
 */
export declare const Title: import("react").ForwardRefExoticComponent<CommonProps & import("react").RefAttributes<HTMLElement>>;
