import { CommonProps } from '../../../common/types';
export interface InfoItemProps extends CommonProps {
    title: string;
    content: string;
    icon?: string;
    size?: 's' | 'm';
    link?: string;
}
/**
 * InfoItem 컴포넌트
 */
export declare const InfoItem: import("react").ForwardRefExoticComponent<InfoItemProps & import("react").RefAttributes<HTMLElement>>;
