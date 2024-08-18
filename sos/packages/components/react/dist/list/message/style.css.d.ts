import { RecipeVariants } from '@vanilla-extract/recipes';
export declare const messageListRecipe: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        default: string;
        danger: string;
        warning: string;
    };
    mode: {
        default: {};
        round: string;
    };
}>;
export type MessageListVariants = RecipeVariants<typeof messageListRecipe>;
