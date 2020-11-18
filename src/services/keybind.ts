import { KeyboardService } from "./keyboard";
import { RegistryService } from "./registry";
import { LoggerService } from "./logger";
import { CanvasService } from "./canvas";

declare const window: any;

export class KeyBindService {

    public static initialize () {

        LoggerService.log("Initializing the key bind service");

        KeyBindService.initializeZoomWheel();
        KeyBindService.initializeZoomToggle();

    }

    private static initializeZoomWheel () {

        const scrollUp = KeyboardService.getKey("scroll up");
        const scrollDown = KeyboardService.getKey("scroll down");

        scrollUp.events.on("down", () => {

            if (RegistryService.getItem("allowZoom") === false) return;
            if (window.gsc === null) return;

            CanvasService.modZoom(0.9);

        });

        scrollDown.events.on("down", () => {

            if (RegistryService.getItem("allowZoom") === false) return;
            if (window.gsc === null) return;

            CanvasService.modZoom(1.1);

        });

    }

    private static initializeZoomToggle () {

        const key = KeyboardService.getKey(RegistryService.getItem("zoomToggleKey"));

        key.events.on("down", () => {

            RegistryService.toggleItem("allowZoom");
            LoggerService.log(`Toggled the zoom feature to ${RegistryService.getItem("allowZoom")}`);

            if (RegistryService.getItem("allowZoom")) {
                CanvasService.setZoom(RegistryService.getItem("zoomAmount"));
            } else {
                CanvasService.resetZoom();
            }

        });

    }

}
