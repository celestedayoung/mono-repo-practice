import { vars } from '@sos/style-tokens';
export declare const palette: {
    readonly [x: string]: string;
};
export declare const colorProperties: {
    conditions: never;
    styles: {
        color: {
            values: {
                [x: string]: {
                    defaultClass: string;
                };
                [x: number]: {
                    defaultClass: string;
                };
            };
        };
        backgroundColor: {
            values: {
                [x: string]: {
                    defaultClass: string;
                };
                [x: number]: {
                    defaultClass: string;
                };
            };
        };
    };
};
export declare const colorSprinkles: ((props: {
    color?: string | number | undefined;
    backgroundColor?: string | number | undefined;
}) => string) & {
    properties: Set<"color" | "backgroundColor">;
};
export type Palette = keyof typeof vars.color.$static.light.color | `opacityBlack${keyof typeof vars.color.$static.light.opacityBlack}` | `opacityWhite${keyof typeof vars.color.$static.light.opacityWhite}` | `blue${keyof typeof vars.color.$palette.blue}` | `green${keyof typeof vars.color.$palette.green}` | `pink${keyof typeof vars.color.$palette.pink}` | `orange${keyof typeof vars.color.$palette.orange}` | `gray${keyof typeof vars.color.$palette.gray}` | `coolGray${keyof typeof vars.color.$palette.coolGray}` | `blueGray${keyof typeof vars.color.$palette.blueGray}` | `background${Capitalize<keyof typeof vars.color.$palette.background>}` | `text${Capitalize<keyof typeof vars.color.$palette.text>}` | `ui${Capitalize<keyof typeof vars.color.$palette.ui>}`;
export interface ColorSprinkles {
    backgroundColor?: Palette;
    color?: Palette;
}
