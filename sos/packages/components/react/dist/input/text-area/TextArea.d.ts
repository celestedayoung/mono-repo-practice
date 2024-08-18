import { ChangeEvent } from 'react';
import { CommonProps } from '../../common/types';
interface TextAreaProps extends CommonProps {
    value?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
}
export declare const TextArea: import("react").ForwardRefExoticComponent<TextAreaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
export {};
