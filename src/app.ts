import { LoggerService } from "./services/logger";
import { CanvasService } from "./services/canvas";
import { InterfaceService } from "./services/interface";
import { InputService } from "./services/input";

export class App {

    public static title: string = "Slither.io Elite";
    public static version: string = "0.1.0-alpha";

    public static initialize (): void {

        LoggerService.log(`Initializing ${App.title} v${App.version}`);

        CanvasService.initialize();
        InterfaceService.initialize();
        InputService.initialize();

    }

}
