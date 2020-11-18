import { App } from "./app";
import "./config";

let started = false;

window.addEventListener("DOMContentLoaded", () => {

    if (started === true) return;
    started = true;

    App.initialize();

});
