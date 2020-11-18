import { LoggerService } from "./logger";
import { Point } from "../util";
import { RegistryService } from "./registry";

declare const window: any;

export class CanvasService {

    public static canvas: HTMLCanvasElement;
    public static context: CanvasRenderingContext2D;

    public static initialize (): void {

        LoggerService.log("Initializing the canvas service");

        CanvasService.canvas = document.querySelector("canvas.nsi");
        CanvasService.context = CanvasService.canvas.getContext("2d");

        setInterval(() => {
            console.log(window.snakes.length, window.snakes);
        }, 3000);

    }

    // Emulates moving the mouse to the specified point
    public static setMouseCoordinates (point: Point): void {
        window.xm = point.x;
        window.ym = point.y;
    }

    public static modZoom (modifier: number): void {
        CanvasService.setZoom(CanvasService.getZoom() * modifier);
    }

    public static setZoom (value: number): void {
        RegistryService.setItem("zoomAmount", value);
        window.gsc = value;
    }

    public static getZoom (): number {
        return window.gsc;
    }

    public static resetZoom (): void {
        window.gsc = 1.157135714;
    }

    public static getCurrentSnakeID (): any {
        return window.snake.id;
    }

    public static getSnakes (): any {
        return window.snakes;
    }

}
