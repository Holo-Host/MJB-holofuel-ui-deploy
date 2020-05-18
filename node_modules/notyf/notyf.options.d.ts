export declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
export interface INotyfIcon {
    className: string;
    tagName: keyof ElementTagNameMap;
    text: string;
}
export interface INotyfNotificationOptions {
    type: string;
    className: string;
    duration: number;
    icon: INotyfIcon | false;
    backgroundColor: string;
    message: string;
    ripple: boolean;
}
export interface INotyfOptions {
    types: Array<DeepPartial<INotyfNotificationOptions>>;
    duration: number;
    ripple: boolean;
}
export declare const DEFAULT_OPTIONS: INotyfOptions;
