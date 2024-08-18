export declare const shadowSprinkles: ((props: {
    boxShadow?: "s" | "xs" | "m" | "l" | "elevatedTop" | undefined;
}) => string) & {
    properties: Set<"boxShadow">;
};
export type ShadowSprinkles = Parameters<typeof shadowSprinkles>[0];
