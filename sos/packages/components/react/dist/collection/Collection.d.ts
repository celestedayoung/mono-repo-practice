import { CommonProps } from '../common/types';
interface CollectionProps extends CommonProps {
    size: 's' | 'm';
    content: string;
    badge?: boolean;
}
export declare const Collection: React.FC<CollectionProps>;
export {};
