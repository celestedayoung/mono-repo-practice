import { CommonProps } from '../common/types';
import { Palette } from '../style/color/sprinkles.css';
import { ButtonVariants } from './style.css';
interface ButtonProps extends CommonProps, NonNullable<ButtonVariants> {
    icon?: string;
    iconColor?: Palette;
    leftSubText?: string | number;
    leftSubTextColor?: Palette;
    rightSubText?: string | number;
    rightSubTextColor?: Palette;
    isLoading?: boolean;
    loadingSpinner?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
