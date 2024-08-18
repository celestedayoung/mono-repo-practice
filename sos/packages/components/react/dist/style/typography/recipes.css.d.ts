import { RecipeVariants } from '@vanilla-extract/recipes';
export declare const typographyRecipe: import("@vanilla-extract/recipes").RuntimeFn<{
    textType: {
        display1: {
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        display2: {
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        title1: {
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        title2: {
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        title3: {
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        heading1: {
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        heading2: {
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        headline: {
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        body1: {
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        body2: {
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        body3: {
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        label: {
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        footnote: {
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        caption: {
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
    };
    textMode: {
        default: {};
        reading: {};
        bold: {};
    };
    textAlign: {
        left: {
            textAlign: "left";
        };
        center: {
            textAlign: "center";
        };
        right: {
            textAlign: "right";
        };
        justify: {
            textAlign: "justify";
        };
    };
}>;
export type TypographyVariants = NonNullable<RecipeVariants<typeof typographyRecipe>>;
