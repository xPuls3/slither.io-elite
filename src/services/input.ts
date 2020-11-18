import { LoggerService } from "./logger";
import { KeyboardService } from "./keyboard";
import { KeyBindService } from "./keybind";

declare const window: any;

export class InputService {

    public static initialize (): void {

        LoggerService.log("Initializing the input service");

        KeyBindService.initialize();

        window.addEventListener("wheel", (event: WheelEvent) => {
            InputService.onMouseWheel(event);
        });

        window.addEventListener("keydown", (event: KeyboardEvent) => {
            KeyboardService.keyDown(event.key);
        });

        window.addEventListener("keyup", (event: KeyboardEvent) => {
            KeyboardService.keyUp(event.key);
        });

    }

    private static onMouseWheel (event: WheelEvent): void {

        if (event.deltaY === 0) return;
        const delta = Math.sign(event.deltaY);

        if (delta === 1) {
            KeyboardService.keyDown("scroll up");
            KeyboardService.keyUp("scroll up");
        } else if (delta === -1) {
            KeyboardService.keyDown("scroll down");
            KeyboardService.keyUp("scroll down");
        }

    }

}
