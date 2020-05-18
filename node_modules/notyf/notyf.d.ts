import { NotyfArray, NotyfNotification } from './notyf.models';
import { INotyfOptions, INotyfNotificationOptions, DeepPartial } from './notyf.options';
/**
 * Main controller class. Defines the main Notyf API.
 */
export default class Notyf {
    notifications: NotyfArray<NotyfNotification>;
    options: INotyfOptions;
    private view;
    constructor(opts?: Partial<INotyfOptions>);
    error(payload: string | Partial<INotyfNotificationOptions>): void;
    success(payload: string | Partial<INotyfNotificationOptions>): void;
    open(options: DeepPartial<INotyfNotificationOptions>): void;
    private _pushNotification;
    private normalizeOptions;
    private registerTypes;
}
