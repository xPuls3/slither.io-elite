import { EventEmitter } from "events";

export class KeyboardService {

    private static keys: { [key: string]: Key } = {};

    private static formatKeyID (keyID: string): string {
        return String(keyID).toLowerCase().trim();
    }

    public static keyDown (keyID: string): void {

        keyID = KeyboardService.formatKeyID(keyID);
        if (!KeyboardService.hasKey(keyID)) return;

        const key: Key = KeyboardService.getKey(keyID);
        key.down();

    }

    public static keyUp (keyID: string): void {

        keyID = KeyboardService.formatKeyID(keyID);
        if (!KeyboardService.hasKey(keyID)) return;

        const key: Key = KeyboardService.getKey(keyID);
        key.up();

    }

    public static hasKey (keyID: string): boolean {
        keyID = KeyboardService.formatKeyID(keyID);
        return Object.prototype.hasOwnProperty.call(KeyboardService.keys, keyID);
    }

    public static getKey (keyID: string): Key {
        keyID = KeyboardService.formatKeyID(keyID);
        if (!KeyboardService.hasKey(keyID)) KeyboardService.registerKey(keyID);
        return KeyboardService.keys[keyID];
    }

    public static registerKey (keyID: string): void {
        keyID = KeyboardService.formatKeyID(keyID);
        KeyboardService.keys[keyID] = new Key(keyID);
    }

}

class Key {

    public id: string;
    public pressed: boolean = false;
    public events: EventEmitter = new EventEmitter();

    constructor (id: string) {
        this.id = id;
    }

    public down (): void {

        if (this.pressed) return;

        this.events.emit("down");
        this.pressed = true;

    }

    public up (): void {

        if (!this.pressed) return;

        this.events.emit("up");
        this.pressed = false;

    }

}
