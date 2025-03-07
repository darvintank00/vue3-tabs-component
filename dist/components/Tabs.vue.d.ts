import { Tab } from "../types";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    cacheLifetime: {
        type: NumberConstructor;
        default: number;
    };
    options: {
        type: ObjectConstructor;
        required: false;
        default: () => {
            useUrlFragment: boolean;
            defaultTabHash: null;
        };
    };
    wrapperClass: {
        type: StringConstructor;
        default: string;
    };
    panelsWrapperClass: {
        type: StringConstructor;
        default: string;
    };
    navClass: {
        type: StringConstructor;
        default: string;
    };
    navItemClass: {
        type: StringConstructor;
        default: string;
    };
    navItemDisabledClass: {
        type: StringConstructor;
        default: string;
    };
    navItemActiveClass: {
        type: StringConstructor;
        default: string;
    };
    navItemInactiveClass: {
        type: StringConstructor;
        default: string;
    };
    navItemLinkClass: {
        type: StringConstructor;
        default: string;
    };
    navItemLinkActiveClass: {
        type: StringConstructor;
        default: string;
    };
    navItemLinkInactiveClass: {
        type: StringConstructor;
        default: string;
    };
    navItemLinkDisabledClass: {
        type: StringConstructor;
        default: string;
    };
}, {
    selectTab: (selectedTabHash: string, event?: Event | undefined) => void;
    findTab: (hash: string) => Tab | undefined;
    activeTabHash: import("vue").Ref<string>;
    lastActiveTabHash: import("vue").Ref<string>;
    tabs: import("vue").Ref<Tab[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("changed" | "clicked")[], "changed" | "clicked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    cacheLifetime: {
        type: NumberConstructor;
        default: number;
    };
    options: {
        type: ObjectConstructor;
        required: false;
        default: () => {
            useUrlFragment: boolean;
            defaultTabHash: null;
        };
    };
    wrapperClass: {
        type: StringConstructor;
        default: string;
    };
    panelsWrapperClass: {
        type: StringConstructor;
        default: string;
    };
    navClass: {
        type: StringConstructor;
        default: string;
    };
    navItemClass: {
        type: StringConstructor;
        default: string;
    };
    navItemDisabledClass: {
        type: StringConstructor;
        default: string;
    };
    navItemActiveClass: {
        type: StringConstructor;
        default: string;
    };
    navItemInactiveClass: {
        type: StringConstructor;
        default: string;
    };
    navItemLinkClass: {
        type: StringConstructor;
        default: string;
    };
    navItemLinkActiveClass: {
        type: StringConstructor;
        default: string;
    };
    navItemLinkInactiveClass: {
        type: StringConstructor;
        default: string;
    };
    navItemLinkDisabledClass: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChanged?: ((...args: any[]) => any) | undefined;
    onClicked?: ((...args: any[]) => any) | undefined;
}, {
    cacheLifetime: number;
    options: Record<string, any>;
    wrapperClass: string;
    panelsWrapperClass: string;
    navClass: string;
    navItemClass: string;
    navItemDisabledClass: string;
    navItemActiveClass: string;
    navItemInactiveClass: string;
    navItemLinkClass: string;
    navItemLinkActiveClass: string;
    navItemLinkInactiveClass: string;
    navItemLinkDisabledClass: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
