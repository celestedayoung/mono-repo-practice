import { CommonProps } from '../../common/types';
interface FollowingListProps extends CommonProps {
    name: string;
    loginId: string;
    nickName?: string;
    onClick: () => void;
}
export declare const MemberList: import("react").ForwardRefExoticComponent<FollowingListProps & import("react").RefAttributes<HTMLElement>>;
export {};
