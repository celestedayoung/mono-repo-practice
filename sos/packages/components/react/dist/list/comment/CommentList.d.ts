import { CommonProps } from '../../common/types';
interface CommentListProps extends CommonProps {
    writer: string;
    date: string;
    isReply: boolean;
    isWriter: boolean;
}
export declare const CommentList: import("react").ForwardRefExoticComponent<CommentListProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
