export declare const layoutSprinkles: ((props: {
    display?: "none" | "block" | "inline" | "flex" | "inline-block" | undefined;
    flexDirection?: "column" | "row" | undefined;
    justifyContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    width?: "100%" | "100vw" | "100dvw" | undefined;
    height?: "100%" | "100vh" | "100dvh" | undefined;
}) => string) & {
    properties: Set<"alignItems" | "display" | "flexDirection" | "height" | "justifyContent" | "width">;
};
export type LayoutSprinkles = Parameters<typeof layoutSprinkles>[0];
