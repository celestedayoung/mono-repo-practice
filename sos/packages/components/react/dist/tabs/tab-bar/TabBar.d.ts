type TabBarProps = {
    tabs: Array<{
        content: string;
        state: 'default' | 'active';
    }>;
    className?: string;
};
export declare const TabBar: import("react").ForwardRefExoticComponent<TabBarProps & import("react").RefAttributes<HTMLElement>>;
export {};
