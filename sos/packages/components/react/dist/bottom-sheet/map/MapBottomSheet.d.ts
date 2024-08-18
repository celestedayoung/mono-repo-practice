import { Infos } from '../../box/info/info-box/InfoBox';
import { CommonProps } from '../../common/types';
import { BadgeVariants } from '../../badge/style.css';
interface MapBottomSheetProps extends CommonProps {
    title?: string;
    badgeText?: string;
    subText?: string;
    infos?: Infos;
    subButtonIcon?: string;
    buttonText?: string;
    badgeColor?: NonNullable<BadgeVariants>['color'];
}
/**
 * MapBottomSheet 컴포넌트
 *
 * @param {React.ReactNode} [props.children] - 자식 요소 (선택)
 * @param {string} props.title - 상단 제목 텍스트 (선택)
 * @param {string} props.badgeText - 뱃지에 표시될 텍스트 (선택)
 * @param {string} props.subText - 부제목 텍스트 (선택)
 * @param {Infos} [props.infos] - InfoBox 컴포넌트에 전달될 정보 (선택)
 * @param {string} [props.subButtonIcon] - 우측 상단 버튼 아이콘 이름 (선택)
 * @param {string} [props.buttonText] - 하단 버튼 텍스트 (선택)
 * @param {NonNullable<BadgeVariants>['color']} [props.badgeColor] - 뱃지 색상 (선택)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...CommonProps} props - Container 컴포넌트에 전달될 기타 속성
 * @param {React.Ref<HTMLElement>} ref - 전달받은 ref
 */
export declare const MapBottomSheet: import("react").ForwardRefExoticComponent<MapBottomSheetProps & import("react").RefAttributes<HTMLElement>>;
export {};
