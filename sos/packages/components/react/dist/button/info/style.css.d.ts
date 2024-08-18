import { RecipeVariants } from '@vanilla-extract/recipes';
export declare const infoButtonRecipe: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        s: (string | {
            width: "96px";
            height: "96px";
        })[];
        m: (string | {
            height: "128px";
        })[];
    };
    variant: {
        default: (string | {
            selectors: {
                '&:hover': {
                    backgroundColor: string;
                };
            };
        })[];
        danger: (string | {
            selectors: {
                '&:hover': {
                    backgroundColor: string;
                };
            };
        })[];
        warning: (string | {
            selectors: {
                '&:hover': {
                    backgroundColor: string;
                };
            };
        })[];
        safe: (string | {
            selectors: {
                '&:hover': {
                    backgroundColor: string;
                };
            };
        })[];
        ghost: {};
    };
}>;
export type InfoButtonVariants = RecipeVariants<typeof infoButtonRecipe>;
