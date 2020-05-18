import { INotyfNotificationOptions, DeepPartial } from './notyf.options';
export declare class NotyfNotification {
    options: DeepPartial<INotyfNotificationOptions>;
    constructor(options: DeepPartial<INotyfNotificationOptions>);
}
export interface IRenderedNotification {
    notification: NotyfNotification;
    node: HTMLElement;
}
export declare enum NotyfArrayEvent {
    Add = 0,
    Remove = 1
}
export declare type NotyfArrayEventFn<T> = (elem: T, event: NotyfArrayEvent, elems: T[]) => void;
export declare class NotyfArray<T> {
    private notifications;
    private updateFn;
    push(elem: T): void;
    splice(index: number, num: number): void;
    indexOf(elem: T): number;
    onupdate(fn: NotyfArrayEventFn<T>): void;
}
