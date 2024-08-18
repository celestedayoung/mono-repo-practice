import { RecipeVariants } from '@vanilla-extract/recipes';
/**
 * 공통 스타일
 */
export declare const commonStyle: string;
export declare const stateStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    state: {
        default: string;
        warning: string;
        danger: string;
    };
}>;
export type StateVariants = RecipeVariants<typeof stateStyle>;
