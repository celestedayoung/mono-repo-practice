import { RecipeVariants } from '@vanilla-extract/recipes';
export declare const badgeRecipe: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        s: string;
        m: string;
        l: string;
    };
    color: {
        blue: string;
        pink: string;
        orange: string;
        green: string;
        white: string;
        ghost: {};
        ghostWhite: {};
    };
}>;
export type BadgeVariants = RecipeVariants<typeof badgeRecipe>;
