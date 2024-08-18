import { CommonProps } from '../../common/types';
interface WeatherBoxProps extends CommonProps {
    date: string;
    location: string;
    condition: React.ReactNode;
    iconSrc: string;
    temperature: number | string;
    highestTemperature: number | string;
    lowestTemperature: number | string;
    windSpeed: number | string;
}
/**
 * WeatherBox 컴포넌트
 *
 * @param {Date} [props.date=new Date()] - 날짜 (필수, 기본값: 현재 날짜)
 * @param {string} [props.location='-'] - 위치 (필수, 기본값: '-')
 * @param {React.ReactNode} [props.condition='loading'] - 날씨 상태 (필수, 기본값: 'loading')
 * @param {number | string} [props.temperature='-'] - 현재 온도 (필수, 기본값: '-')
 * @param {number | string} [props.highestTemperature='-'] - 최고 온도 (필수, 기본값: '-')
 * @param {number | string} [props.lowestTemperature='-'] - 최저 온도 (필수, 기본값: '-')
 * @param {string} [props.windSpeed='-'] - 미세먼지 상태 (필수, 기본값: '-')
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...CommonProps} props - Container 컴포넌트에 전달될 기타 속성
 * @param {React.Ref<HTMLElement>} ref - 전달받은 ref
 */
export declare const WeatherBox: import("react").ForwardRefExoticComponent<WeatherBoxProps & import("react").RefAttributes<HTMLElement>>;
export {};
