import { CommonProps } from '../../../common/types';
import { InfoItemProps } from '../info-item/InfoItem';
export type Infos = Omit<InfoItemProps, 'size'>[];
interface InfoBoxProps extends CommonProps {
    infos: Infos;
    size?: 's' | 'm';
}
/**
 * InfoBox 컴포넌트
 *
 * @param {Infos} props.infos - InfoItem 컴포넌트에 전달될 정보 객체 배열 (필수, 객체 형식: {title: '제목', content: '내용', icon: '아이콘 이름', link: '링크 URL'})
 * @param {'s' | 'm'} [props.size='m'] - InfoItem 컴포넌트의 크기 (선택, 기본값: 'm')
 * @param {string} [props.backgroundColor] - 배경색 (선택)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...CommonProps} props - Container 컴포넌트에 전달될 기타 속성
 * @param {React.Ref<HTMLElement>} ref - 전달받은 ref
 */
export declare const InfoBox: import("react").ForwardRefExoticComponent<InfoBoxProps & import("react").RefAttributes<HTMLElement>>;
export {};
