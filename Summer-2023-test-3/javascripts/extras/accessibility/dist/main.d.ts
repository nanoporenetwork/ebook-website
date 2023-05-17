import { Common } from './common';
import { IAccessibility, IAccessibilityOptions, ISessionState, IStateValues } from './interfaces/accessibility.interface';
import { IMenuInterface } from './interfaces/menu.interface';
export declare class Accessibility implements IAccessibility {
    private _isReading;
    private _common;
    private _storage;
    private _options;
    private _sessionState;
    private _htmlInitFS;
    private _body;
    private _html;
    private _icon;
    private _menu;
    private _htmlOrgFontSize;
    private _stateValues;
    private _recognition;
    private _speechToTextTarget;
    menuInterface: IMenuInterface;
    options: IAccessibilityOptions;
    constructor(options?: IAccessibilityOptions);
    stateValues: IStateValues;
    readonly html: HTMLElement;
    readonly body: HTMLBodyElement;
    sessionState: ISessionState;
    readonly common: Common;
    readonly recognition: any;
    isReading: boolean;
    private readonly defaultOptions;
    initFontSize(): void;
    fontFallback(): void;
    deleteOppositesIfDefined(options: IAccessibilityOptions): IAccessibilityOptions;
    disabledUnsupportedFeatures(): void;
    injectCss(): void;
    injectIcon(): HTMLElement;
    parseKeys(arr: Array<any>): string;
    injectMenu(): HTMLElement;
    getVoices(): Promise<SpeechSynthesisVoice[]>;
    injectTts(): Promise<void>;
    addListeners(): void;
    disableUnsupportedModules(): void;
    resetAll(): void;
    resetTextSize(): void;
    resetLineHeight(): void;
    resetTextSpace(): void;
    alterTextSize(isIncrease: boolean): void;
    alterLineHeight(isIncrease: boolean): void;
    alterTextSpace(isIncrease: boolean): void;
    speechToText(): void;
    textToSpeech(text: string): void;
    createScreenShot(url: string): Promise<string>;
    listen(): void;
    read(e: Event): void;
    runHotkey(name: string): void;
    toggleMenu(): void;
    invoke(action: string, button: HTMLElement): void;
    build(): void;
    updateReadGuide(e: Event | TouchEvent | any): void;
    resetIfDefined(src: string, dest: any, prop: string): void;
    onChange(updateSession: boolean): void;
    saveSession(): void;
    setSessionFromCache(): void;
    destroy(): void;
}
export default Accessibility;
