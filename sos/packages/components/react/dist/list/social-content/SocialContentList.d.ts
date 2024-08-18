import { CommonProps } from '../../common/types';
interface SocialContentListProps extends CommonProps {
    title: string;
    writer: string;
    date: string;
    location: string;
    viewCounts: number;
    commentCounts: number;
    content: string;
    isTrueCounts: number;
    isFalseCounts: number;
    isDetail: boolean;
    routeToPath?: React.MouseEventHandler<HTMLElement>;
    firstBtnFunc?: React.MouseEventHandler<HTMLElement>;
    secondBtnFucnt?: React.MouseEventHandler<HTMLElement>;
    isFact?: boolean;
}
export declare const SocialContentList: import("react").ForwardRefExoticComponent<SocialContentListProps & import("react").RefAttributes<HTMLElement>>;
export {};
