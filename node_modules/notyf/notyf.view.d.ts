import { NotyfArrayEvent, NotyfNotification } from './notyf.models';
export declare class NotyfView {
    a11yContainer: HTMLElement;
    animationEndEventName: string;
    container: HTMLElement;
    private notifications;
    constructor();
    update(notification: NotyfNotification, type: NotyfArrayEvent): void;
    removeNotification(notification: NotyfNotification): void;
    addNotification(notification: NotyfNotification): void;
    private _renderNotification;
    private _popRenderedNotification;
    private _buildNotificationCard;
    private _createHTLMElement;
    /**
     * Creates an invisible container which will announce the notyfs to
     * screen readers
     */
    private _createA11yContainer;
    /**
     * Announces a message to screenreaders.
     */
    private _announce;
    /**
     * Determine which animationend event is supported
     */
    private _getAnimationEndEventName;
}
