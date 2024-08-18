import React from 'react';
import { CommonProps } from '../common/types';
interface InputProps extends CommonProps {
    state: 'default' | 'highlight' | 'warning' | 'disabled' | 'readonly';
    placeholder: string;
    type?: string;
    showIcon?: boolean;
    showButton?: boolean;
    showPasswordToggle?: boolean;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    readOnly?: boolean;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export {};
